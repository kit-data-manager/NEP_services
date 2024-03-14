let model = {
  "$schema": "http://json-schema.org/draft-07/schema",
  "title": "Helmholtz Kernel Information Profile",
  "$id": "21.T11148/b9b76f887845e32d29f7",
  "type": "object",
  "required": [
    "kernelInformationProfile",
    "digitalObjectType",
    "digitalObjectLocation",
    "dateCreated",
    "license"
  ],
  "properties": {
    "customName": {
      "title": "Custom Name",
      "pid":"customName",
      "maxLength": 32,
      "description": "A human readable name for better identification. This property is NOT part of the final FAIR DO!",
      "type": "string"
    },
    "kernelInformationProfile": {
      "title": "kernelInformationProfile",
      "pid": "21.T11148/076759916209e5d62bd5",
      "description": "A PID pointing to the kernel information profile defining the structure of this PID record.",
      "type": "string"
    },
    "digitalObjectType": {
      "title": "digitalObjectType",
      "pid": "21.T11148/1c699a5d1b4ad3ba4956",
      "description": "The type of the object referenced by digitalObjectLocation.",
      "type": "string"
    },
    "digitalObjectLocation": {
      "title": "digitalObjectLocation",
      "pid": "21.T11148/b8457812905b83046284",
      "description": "A web-resolvable pointer to the actual object described by this PID record.",
      "items": {
        "type": "string"
      }
    },
    "digitalObjectLocationAccessProtocol": {
      "title": "digitalObjectLocationAccessProtocol",
      "pid": "21.T11148/dcd4e99d26a00b8132f8",
      "description": "Additional information which can be used by an access client for accessing digitalObjectLocation.",
      "type": "string"
    },
    "dateCreated": {
      "title": "dateCreated",
      "pid": "21.T11148/aafd5fb4c7222e2d950a",
      "description": "The date when the object referenced by digitalObjectLocation was initially created.",
      "type": "string"
    },
    "dateModified": {
      "title": "dateModified",
      "pid": "21.T11148/397d831aa3a9d18eb52c",
      "description": "The date when the object referenced by digitalObjectLocation was last modified. This attribute is recommended, if a version is provided.",
      "type": "string"
    },
    "underEmbargoUntil": {
      "title": "underEmbargoUntil",
      "pid": "21.T11148/796a3ea6c9a38633fb7e",
      "description": "The date when the object referenced by digitalObjectLocation is planned to be publicly accessible or was made publicly accessible.",
      "type": "string"
    },
    "policy": {
      "title": "policy",
      "pid": "21.T11148/8074aed799118ac263ad",
      "description": "A web-resolvable pointer to a policy object describing e.g., object access and modification policies.",
      "type": "string"
    },
    "version": {
      "title": "version",
      "pid": "21.T11148/c692273deb2772da307f",
      "description": "Version of the object referenced by digitalObjectLocation, preferably following semantic versioning conventions.",
       "type": "string",
      "pattern": "v?[0-9]+.[0-9]+.[0-9]+.*"
    },
    "license": {
      "title": "license",
      "pid": "21.T11148/2f314c8fe5fb6a0063a8",
      "default": "https://spdx.org/licenses/CC-BY-4.0",
      "description": "URL referring to the license of the object referenced by digitalObjectLocation, preferably pointing to https://spdx.org/.",
      "type": "string",
      "enum":[
        "https://spdx.org/licenses/0BSD.html",
        "https://spdx.org/licenses/AAL.html",
        "https://spdx.org/licenses/AFL-1.1.html",
        "https://spdx.org/licenses/AFL-1.2.html",
        "https://spdx.org/licenses/AFL-2.0.html",
        "https://spdx.org/licenses/AFL-2.1.html",
        "https://spdx.org/licenses/AFL-3.0.html",
        "https://spdx.org/licenses/AGPL-1.0.html",
        "https://spdx.org/licenses/AGPL-3.0.html",
        "https://spdx.org/licenses/AGPL-3.0-only.html",
        "https://spdx.org/licenses/AGPL-3.0-or-later.html",
        "https://spdx.org/licenses/Apache-1.0.html",
        "https://spdx.org/licenses/Apache-1.1.html",
        "https://spdx.org/licenses/Apache-2.0.html",
        "https://spdx.org/licenses/APL-1.0.html",
        "https://spdx.org/licenses/APSL-1.0.html",
        "https://spdx.org/licenses/APSL-1.1.html",
        "https://spdx.org/licenses/APSL-1.2.html",
        "https://spdx.org/licenses/APSL-2.0.html",
        "https://spdx.org/licenses/Artistic-1.0.html",
        "https://spdx.org/licenses/Artistic-1.0-cl8.html",
        "https://spdx.org/licenses/Artistic-1.0-Perl.html",
        "https://spdx.org/licenses/Artistic-2.0.html",
        "https://spdx.org/licenses/BitTorrent-1.1.html",
        "https://spdx.org/licenses/BSD-1-Clause.html",
        "https://spdx.org/licenses/BSD-2-Clause.html",
        "https://spdx.org/licenses/BSD-2-Clause-FreeBSD.html",
        "https://spdx.org/licenses/BSD-2-Clause-NetBSD.html",
        "https://spdx.org/licenses/BSD-2-Clause-Patent.html",
        "https://spdx.org/licenses/BSD-3-Clause.html",
        "https://spdx.org/licenses/BSD-3-Clause-Clear.html",
        "https://spdx.org/licenses/BSD-3-Clause-LBNL.html",
        "https://spdx.org/licenses/BSD-4-Clause.html",
        "https://spdx.org/licenses/BSL-1.0.html",
        "https://spdx.org/licenses/CAL-1.0.html",
        "https://spdx.org/licenses/CAL-1.0-Combined-Work-Exception.html",
        "https://spdx.org/licenses/CATOSL-1.1.html",
        "https://spdx.org/licenses/CC-BY-4.0.html",
        "https://spdx.org/licenses/CC-BY-SA-4.0.html",
        "https://spdx.org/licenses/CC0-1.0.html",
        "https://spdx.org/licenses/CDDL-1.0.html",
        "https://spdx.org/licenses/CECILL-2.0.html",
        "https://spdx.org/licenses/CECILL-2.1.html",
        "https://spdx.org/licenses/CECILL-B.html",
        "https://spdx.org/licenses/CECILL-C.html",
        "https://spdx.org/licenses/CERN-OHL-P-2.0.html",
        "https://spdx.org/licenses/CERN-OHL-S-2.0.html",
        "https://spdx.org/licenses/CERN-OHL-W-2.0.html",
        "https://spdx.org/licenses/ClArtistic.html",
        "https://spdx.org/licenses/CNRI-Python.html",
        "https://spdx.org/licenses/Condor-1.1.html",
        "https://spdx.org/licenses/CPAL-1.0.html",
        "https://spdx.org/licenses/CPL-1.0.html",
        "https://spdx.org/licenses/CUA-OPL-1.0.html",
        "https://spdx.org/licenses/ECL-1.0.html",
        "https://spdx.org/licenses/ECL-2.0.html",
        "https://spdx.org/licenses/eCos-2.0.html",
        "https://spdx.org/licenses/EFL-1.0.html",
        "https://spdx.org/licenses/EFL-2.0.html",
        "https://spdx.org/licenses/Entessa.html",
        "https://spdx.org/licenses/EPL-1.0.html",
        "https://spdx.org/licenses/EPL-2.0.html",
        "https://spdx.org/licenses/EUDatagrid.html",
        "https://spdx.org/licenses/EUPL-1.1.html",
        "https://spdx.org/licenses/EUPL-1.2.html",
        "https://spdx.org/licenses/Fair.html",
        "https://spdx.org/licenses/Frameworx-1.0.html",
        "https://spdx.org/licenses/FSFAP.html",
        "https://spdx.org/licenses/FTL.html",
        "https://spdx.org/licenses/GFDL-1.1.html",
        "https://spdx.org/licenses/GFDL-1.1-only.html",
        "https://spdx.org/licenses/GFDL-1.1-or-later.html",
        "https://spdx.org/licenses/GFDL-1.2.html",
        "https://spdx.org/licenses/GFDL-1.2-only.html",
        "https://spdx.org/licenses/GFDL-1.2-or-later.html",
        "https://spdx.org/licenses/GFDL-1.3.html",
        "https://spdx.org/licenses/GFDL-1.3-only.html",
        "https://spdx.org/licenses/GFDL-1.3-or-later.html",
        "https://spdx.org/licenses/gnuplot.html",
        "https://spdx.org/licenses/GPL-2.0.html",
        "https://spdx.org/licenses/GPL-2.0+.html",
        "https://spdx.org/licenses/GPL-2.0-only.html",
        "https://spdx.org/licenses/GPL-2.0-or-later.html",
        "https://spdx.org/licenses/GPL-3.0.html",
        "https://spdx.org/licenses/GPL-3.0+.html",
        "https://spdx.org/licenses/GPL-3.0-only.html",
        "https://spdx.org/licenses/GPL-3.0-or-later.html",
        "https://spdx.org/licenses/GPL-3.0-with-GCC-exception.html",
        "https://spdx.org/licenses/HPND.html",
        "https://spdx.org/licenses/IJG.html",
        "https://spdx.org/licenses/iMatix.html",
        "https://spdx.org/licenses/Imlib2.html",
        "https://spdx.org/licenses/Intel.html",
        "https://spdx.org/licenses/IPA.html",
        "https://spdx.org/licenses/IPL-1.0.html",
        "https://spdx.org/licenses/ISC.html",
        "https://spdx.org/licenses/Jam.html",
        "https://spdx.org/licenses/LGPL-2.0.html",
        "https://spdx.org/licenses/LGPL-2.0+.html",
        "https://spdx.org/licenses/LGPL-2.0-only.html",
        "https://spdx.org/licenses/LGPL-2.0-or-later.html",
        "https://spdx.org/licenses/LGPL-2.1.html",
        "https://spdx.org/licenses/LGPL-2.1+.html",
        "https://spdx.org/licenses/LGPL-2.1-only.html",
        "https://spdx.org/licenses/LGPL-2.1-or-later.html",
        "https://spdx.org/licenses/LGPL-3.0.html",
        "https://spdx.org/licenses/LGPL-3.0+.html",
        "https://spdx.org/licenses/LGPL-3.0-only.html",
        "https://spdx.org/licenses/LGPL-3.0-or-later.html",
        "https://spdx.org/licenses/LiLiQ-P-1.1.html",
        "https://spdx.org/licenses/LiLiQ-R-1.1.html",
        "https://spdx.org/licenses/LiLiQ-Rplus-1.1.html",
        "https://spdx.org/licenses/LPL-1.0.html",
        "https://spdx.org/licenses/LPL-1.02.html",
        "https://spdx.org/licenses/LPPL-1.2.html",
        "https://spdx.org/licenses/LPPL-1.3a.html",
        "https://spdx.org/licenses/LPPL-1.3c.html",
        "https://spdx.org/licenses/MirOS.html",
        "https://spdx.org/licenses/MIT.html",
        "https://spdx.org/licenses/MIT-0.html",
        "https://spdx.org/licenses/MIT-Modern-Variant.html",
        "https://spdx.org/licenses/Motosoto.html",
        "https://spdx.org/licenses/MPL-1.0.html",
        "https://spdx.org/licenses/MPL-1.1.html",
        "https://spdx.org/licenses/MPL-2.0.html",
        "https://spdx.org/licenses/MPL-2.0-no-copyleft-exception.html",
        "https://spdx.org/licenses/MS-PL.html",
        "https://spdx.org/licenses/MS-RL.html",
        "https://spdx.org/licenses/MulanPSL-2.0.html",
        "https://spdx.org/licenses/Multics.html",
        "https://spdx.org/licenses/NASA-1.3.html",
        "https://spdx.org/licenses/Naumen.html",
        "https://spdx.org/licenses/NCSA.html",
        "https://spdx.org/licenses/NGPL.html",
        "https://spdx.org/licenses/Nokia.html",
        "https://spdx.org/licenses/NOSL.html",
        "https://spdx.org/licenses/NPL-1.0.html",
        "https://spdx.org/licenses/NPL-1.1.html",
        "https://spdx.org/licenses/NPOSL-3.0.html",
        "https://spdx.org/licenses/NTP.html",
        "https://spdx.org/licenses/Nunit.html",
        "https://spdx.org/licenses/OCLC-2.0.html",
        "https://spdx.org/licenses/ODbL-1.0.html",
        "https://spdx.org/licenses/OFL-1.0.html",
        "https://spdx.org/licenses/OFL-1.1.html",
        "https://spdx.org/licenses/OFL-1.1-no-RFN.html",
        "https://spdx.org/licenses/OFL-1.1-RFN.html",
        "https://spdx.org/licenses/OGTSL.html",
        "https://spdx.org/licenses/OLDAP-2.3.html",
        "https://spdx.org/licenses/OLDAP-2.7.html",
        "https://spdx.org/licenses/OLDAP-2.8.html",
        "https://spdx.org/licenses/OLFL-1.3.html",
        "https://spdx.org/licenses/OpenSSL.html",
        "https://spdx.org/licenses/OSET-PL-2.1.html",
        "https://spdx.org/licenses/OSL-1.0.html",
        "https://spdx.org/licenses/OSL-1.1.html",
        "https://spdx.org/licenses/OSL-2.0.html",
        "https://spdx.org/licenses/OSL-2.1.html",
        "https://spdx.org/licenses/OSL-3.0.html",
        "https://spdx.org/licenses/PHP-3.0.html",
        "https://spdx.org/licenses/PHP-3.01.html",
        "https://spdx.org/licenses/PostgreSQL.html",
        "https://spdx.org/licenses/Python-2.0.html",
        "https://spdx.org/licenses/QPL-1.0.html",
        "https://spdx.org/licenses/RPL-1.1.html",
        "https://spdx.org/licenses/RPL-1.5.html",
        "https://spdx.org/licenses/RPSL-1.0.html",
        "https://spdx.org/licenses/RSCPL.html",
        "https://spdx.org/licenses/Ruby.html",
        "https://spdx.org/licenses/SGI-B-2.0.html",
        "https://spdx.org/licenses/SimPL-2.0.html",
        "https://spdx.org/licenses/SISSL.html",
        "https://spdx.org/licenses/Sleepycat.html",
        "https://spdx.org/licenses/SMLNJ.html",
        "https://spdx.org/licenses/SPL-1.0.html",
        "https://spdx.org/licenses/StandardML-NJ.html",
        "https://spdx.org/licenses/UCL-1.0.html",
        "https://spdx.org/licenses/Unicode-DFS-2016.html",
        "https://spdx.org/licenses/Unlicense.html",
        "https://spdx.org/licenses/UPL-1.0.html",
        "https://spdx.org/licenses/Vim.html",
        "https://spdx.org/licenses/VSL-1.0.html",
        "https://spdx.org/licenses/W3C.html",
        "https://spdx.org/licenses/Watcom-1.0.html",
        "https://spdx.org/licenses/WTFPL.html",
        "https://spdx.org/licenses/wxWindows.html",
        "https://spdx.org/licenses/X11.html",
        "https://spdx.org/licenses/XFree86-1.1.html",
        "https://spdx.org/licenses/xinetd.html",
        "https://spdx.org/licenses/Xnet.html",
        "https://spdx.org/licenses/YPL-1.1.html",
        "https://spdx.org/licenses/Zend-2.0.html",
        "https://spdx.org/licenses/Zimbra-1.3.html",
        "https://spdx.org/licenses/Zlib.html",
        "https://spdx.org/licenses/ZPL-2.0.html",
        "https://spdx.org/licenses/ZPL-2.1.html"
      ],
      "default": "https://spdx.org/licenses/CC-BY-4.0.html"
    },
    "checksum": {
      "title": "checksum",
      "pid": "21.T11148/82e2503c49209e987740",
      "allowEmpty": false,
      "default":"00000000000000000000000000000000",
      "description": "Checksum of the object referenced by digitalObjectLocation. The checksum algorithm is determined by the input length.",
      "oneOf": [
        {
          "required": [
            "sha160sum"
          ],
          "title": "SHA-160",
          "type": "object",
          "properties": {
            "sha160sum": {
              "pattern": "^((sha|SHA)160( |:|=))?( )*([0-9]|[a-f]){40}$",
              "type": "string",
              "description": "sha160sum-string@21.T11148/538d60da429f234d6f53"
            }
          }
        },
        {
          "required": [
            "sha224sum"
          ],
          "title": "SHA-224",
          "type": "object",
          "properties": {
            "sha224sum": {
              "pattern": "^((sha|SHA)224( |:|=))?( )*([0-9]|[a-f]){56}$",
              "type": "string",
              "description": "sha224sum-string@21.T11148/8fe94dfe8d852b486b3b"
            }
          }
        },
        {
          "required": [
            "sha256sum"
          ],
          "title": "SHA-256",
          "type": "object",
          "properties": {
            "sha256sum": {
              "pattern": "^((sha|SHA)256( |:|=))?( )*([0-9]|[a-f]){64}$",
              "type": "string",
              "description": "sha256sum-string@21.T11148/bf6a6b86cb0481572b13"
            }
          }
        },
        {
          "required": [
            "sha384sum"
          ],
          "title": "SHA-384",
          "type": "object",
          "properties": {
            "sha384sum": {
              "pattern": "^((sha|SHA)384( |:|=))?( )*([0-9]|[a-f]){96}$",
              "type": "string",
              "description": "sha384sum-string@21.T11148/e944e035caf3ec24192c"
            }
          }
        },
        {
          "required": [
            "sha512sum"
          ],
          "title": "SHA-512",
          "type": "object",
          "properties": {
            "sha512sum": {
              "pattern": "^((sha|SHA)512( |:|=))?( )*([0-9]|[a-f]){128}$",
              "type": "string",
              "description": "sha512sum-string@21.T11148/89d2e4d1e93625060cf0"
            }
          }
        },
        {
          "required": [
            "md5sum"
          ],
          "type": "object",
          "title": "MD5",
          "properties": {
            "md5sum": {
              "pattern": "^((md|MD)5( |:|=))?( )*([0-9]|[a-f]){32}$",
              "type": "string",
              "description": "md5sum-string@21.T11148/ef277087753e8ba2e606"
            }
          }
        }
      ]
    },
    "signature": {
      "title": "signature",
      "pid": "21.T11148/37d0f4689c6ea3301787",
      "description": "A cryptographic signature of this record in a specified format, including especially the checksum for advanced integrity checks and assumptions about reproducibility.",
      "type": "string"
    },
    "topic": {
      "title": "topic",
      "pid": "21.T11148/b415e16fbe4ca40f2270",
      "description": "One or more topics from a controlled vocabulary the object referenced by digitalObjectLocation is related to.",
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1
    },
    "locationPreview": {
      "title": "locationPreview",
      "pid": "21.T11148/7fdada5846281ef5d461",
      "description": "A web-resolvable pointer to a preview of the object referenced by digitalObjectLocation, e.g., a low-resolution image or a dataset sample.",
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1
    },
    "contact": {
      "title": "contact",
      "pid": "21.T11148/1a73af9e7ae00182733b",
      "description": "A web-resolvable pointer to an institution or a person responsible for the object referenced by digitalObjectLocation, preferably an ORCiD or ROR URL.",
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1
    },
    "hasMetadata": {
      "title": "hasMetadata",
      "pid": "21.T11148/d0773859091aeb451528",
      "description": "One or more PID(s) referring to related FAIR DOs providing metadata for the object referenced by digitalObjectLocation. It is the inverse to isMetadataFor.",
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1
    },
    "isMetadataFor": {
      "title": "isMetadataFor",
      "pid": "21.T11148/4fe7cde52629b61e3b82",
      "description": "A PID pointing to another FAIR DO describing the object referenced by digitalObjectLocation. It is the inverse to hasMetadata.",
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1
    },
    "wasGeneratedBy": {
      "title": "wasGeneratedBy",
      "pid": "21.T11148/c085f1292d7d4a338d96",
      "description": "A PID pointing to an activity which generated the object referenced by digitalObjectLocation.",
      "type": "string"
    },
    "wasDerivedFrom": {
      "title": "wasDerivedFrom",
      "pid": "21.T11148/c6e4c19f294ee6f41b1e",
      "description": "A PID pointing to another FAIR DO from which the object referenced by digitalObjectLocation was derived from.",
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1
    },
    "specializationOf": {
      "title": "specializationOf",
      "pid": "21.T11148/ab53242825e85a0a7f76",
      "description": "A PID pointing to another FAIR DO which is a specialization of the object referenced by digitalObjectLocation.",
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1
    },
    "wasRevisionOf": {
      "title": "wasRevisionOf",
      "pid": "21.T11148/2a1cad55473b20407c78",
      "description": "A PID pointing to another FAIR DO which is a specialization of the object referenced by digitalObjectLocation.",
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1
    },
    "hadPrimarySource": {
      "title": "hadPrimarySource",
      "pid": "21.T11148/a753134738da82809fc1",
      "description": "A PID pointing to another FAIR DO which is the primary source of the object referenced by digitalObjectLocation.",
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1
    },
    "wasQuotedFrom": {
      "title": "wasQuotedFrom",
      "pid": "21.T11148/beaeecebec408908de35",
      "description": "A PID pointing to another FAIR DO from which the object referenced by digitalObjectLocation was fully or partly quoted.",
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1
    },
    "alternateOf": {
      "title": "alternateOf",
      "pid": "21.T11148/432132bdbd946b2baf2b",
      "description": "A PID pointing to another FAIR DO which is an alternate of the object referenced by digitalObjectLocation.",
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1
    },
    "provenanceGraph": {
      "title": "provenanceGraph",
      "pid": "21.T11148/af11e18f83466642c47d",
      "description": "A PID pointing to another FAIR DO which refers to the provenance graph of the object referenced by digitalObjectLocation.",
      "type": "string"
    }
  }
};
