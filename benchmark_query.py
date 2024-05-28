from multiprocessing.pool import ThreadPool
import requests
from matplotlib import pyplot as plt
from datetime import datetime
import threading

query = """http://localhost:8000/render_results_nmr_graph?query=query_attribute&record_attribute=digitalObjectLocation&attribute_value=&pid=&sparql=&sparql_request=%0A++++++++++++++++++++++++++++PREFIX+rdfs:+<http://www.w3.org/2000/01/rdf-schema%23>%0A++++++++++++++++++++++++++++PREFIX+fdoo:+<https://datamanager.kit.edu/FDO-Graph%23>%0A+++++++++++++++++++++%0A++++++++++++++++++++++++++++SELECT+?attribute_np+?attributeValue_np+?pid%0A++++++++++++++++++++++++++++WHERE+%7B%0A++++++++++++++++++++++++++++fdoo:digitalObjectLocation+fdoo:hasValue+?attributeValue.%0A++++++++++++++++++++++++++++FILTER+regex(str(?attributeValue),++"",+"i")%0A++++++++++++++++++++++++++++BIND(REPLACE(STR(?attributeValue),+"https://datamanager.kit.edu/FDO-Graph%23",+"")+AS+?attributeValue_np)%0A++++++++++++++++++++++++++++?attributeValue+fdoo:isValueFor+?fdo.%0A++++++++++++++++++++++++++++?fdo+rdfs:label+?pid.%0A++++++++++++++++++++++++++++?attributeValue+fdoo:hasKey+?attribute.%0A++++++++++++++++++++++++++++BIND(REPLACE(STR(?attribute),+"https://datamanager.kit.edu/FDO-Graph%23",+"")+AS+?attribute_np)%0A++++++++++++++++++++++++++++%7D%0A++++++++++++++++++++++++++++"""

n = 1024
t = 1024

failed = 0
failed_lock = threading.Lock()

def do_query(i):
    global failed
    start = datetime.now()
    success = False
    while not success:
        try:
            requests.get(query)
            success = True
        except:
            with failed_lock:
                failed += 1
    duration = datetime.now() - start
    return duration.total_seconds()

p = ThreadPool(t)

global_start = datetime.now()
times = p.map(do_query, range(n))
global_duration = datetime.now() - global_start

print(f'Executed {n} queries on {t} threads')
print(f'Total time: {global_duration}')
print(f'Queries per second: {n / global_duration.total_seconds()}')
print(f'Average query time: {sum(times) / n}s')
print(f'Min query time: {min(times)}s')
print(f'Max query time: {max(times)}s')
print(f'Queries failed: {failed} ({failed/n*100:3f}%)')


plt.bar(list(range(n)), times)
plt.show()