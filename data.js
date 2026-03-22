const riskDrugData = {
  "zh": {
    "ACC": {
      "cancer_type": "肾上腺皮质癌",
      "GPRC5B_coeff": -0.50184,
      "LSAMP_coeff": 1.802857,
      "PDGFRA_coeff": 0.927976,
      "threshold": 0.591951,
      "high_risk_drugs": ["Osimertinib_1919", "Dactolisib_1057", "Navitoclax_1011", "Uprosertib_2106", "AZD1208_1449"],
      "low_risk_drugs": ["Talazoparib_1259", "EPZ004777_1237", "Paclitaxel_1080", "VX-11e_2096", "MK-2206_1053"]
    },
    "BLCA": {
      "cancer_type": "膀胱尿路上皮癌",
      "GPRC5B_coeff": -1.375925,
      "LSAMP_coeff": -1.376022,
      "PDGFRA_coeff": -1.767666,
      "threshold": 2.197057,
      "high_risk_drugs": ["P22077_1933", "Uprosertib_2106", "Docetaxel_1819", "PD173074_1049", "BDP-00009066_1866"],
      "low_risk_drugs": ["Picolinici-acid_1635", "Nilotinib_1013", "Vorinostat_1012", "ZM447439_1050", "Tamoxifen_1199"]
    },
    "BRCA": {
      "cancer_type": "乳腺浸润癌",
      "GPRC5B_coeff": 0.40446,
      "LSAMP_coeff": 0.83229,
      "PDGFRA_coeff": -1.917662,
      "threshold": 2.819459,
      "high_risk_drugs": ["Daporinad_1248", "Oxaliplatin_1806", "Venetoclax_1909", "Navitoclax_1011", "Elephantin_1835"],
      "low_risk_drugs": ["Dinaciclib_1180", "Pyridostatin_2044", "GDC0810_1925", "WEHI-539_1997", "Docetaxel_1819"]
    },
    "CESC": {
      "cancer_type": "宫颈鳞癌和腺癌",
      "GPRC5B_coeff": 1.329771,
      "LSAMP_coeff": -1.150644,
      "PDGFRA_coeff": -1.2727,
      "threshold": -1.899573,
      "high_risk_drugs": ["AGI-6780_1634", "Fulvestrant_1200", "ERK_6604_1714", "MG-132_1862", "AZD1332_1463"],
      "low_risk_drugs": ["Vinblastine_1004", "AZD6482_2169", "Irinotecan_1088", "MIM1_1996", "Picolinici-acid_1635"]
    },
    "CHOL": {
      "cancer_type": "胆管癌",
      "GPRC5B_coeff": -0.783031,
      "LSAMP_coeff": 0.099026,
      "PDGFRA_coeff": -0.27222,
      "threshold": -1.252625,
      "high_risk_drugs": ["Leflunomide_1578", "AZD1332_1463", "BI-2536_1086", "Tamoxifen_1199", "AT13148_2170"],
      "low_risk_drugs": ["IWP-2_1576", "MK-2206_1053", "ZM447439_1050", "PCI-34051_1621", "Alisertib_1051"]
    },
    "COAD": {
      "cancer_type": "结肠癌",
      "GPRC5B_coeff": 0.974964442884743,
      "LSAMP_coeff": -1.30337826305244,
      "PDGFRA_coeff": -0.639834133401197,
      "threshold": 1.591542,
      "high_risk_drugs": ["Axitinib_1021", "Bortezomib_1191", "Dabrafenib_1373", "Dasatinib_1079", "Gefitinib_1010"],
      "low_risk_drugs": ["Docetaxel_1007", "Paclitaxel_1080", "Tamoxifen_1199", "Temozolomide_1375", "Oxaliplatin_1806"]
    },
    "DLBC": {
      "cancer_type": "弥漫性大B细胞淋巴瘤",
      "GPRC5B_coeff": -0.17572,
      "LSAMP_coeff": 1.140704,
      "PDGFRA_coeff": -1.201305,
      "threshold": 0.085407,
      "high_risk_drugs": ["Nutlin-3a (-)_1047", "Dihydrorotenone_1827", "Cyclophosphamide_1512", "AZD5363_1916", "AGI-5198_1913"],
      "low_risk_drugs": ["WZ4003_1614", "OF-1_1853", "MK-1775_1179", "BPD-00008900_1998", "NU7441_1038"]
    },
    "ESCA": {
      "cancer_type": "食管癌",
      "GPRC5B_coeff": 0.369658,
      "LSAMP_coeff": -1.814198,
      "PDGFRA_coeff": 0.430179,
      "threshold": -1.976855,
      "high_risk_drugs": ["AZD7762_1022", "I-BRD9_1928", "YK-4-279_1239", "JQ1_2172", "Epirubicin_1511"],
      "low_risk_drugs": ["Nutlin-3a (-)_1047", "Daporinad_1248", "RO-3306_1052", "PCI-34051_1621", "AZD1332_1463"]
    },
    "GBM": {
      "cancer_type": "多形成性胶质细胞瘤",
      "GPRC5B_coeff": -1.739794,
      "LSAMP_coeff": 1.795542,
      "PDGFRA_coeff": 1.862528,
      "threshold": 1.850384,
      "high_risk_drugs": ["JAK1_8709_1718", "AZD8186_1918", "CZC24832_1615", "Oxaliplatin_1089", "AZD5582_1617"],
      "low_risk_drugs": ["LGK974_1598", "GSK269962A_1192", "MIRA-1_1931", "IAP_5620_1428", "WEHI-539_1997"]
    },
    "HNSC": {
      "cancer_type": "头颈鳞状细胞癌",
      "GPRC5B_coeff": -0.781545,
      "LSAMP_coeff": -1.609312,
      "PDGFRA_coeff": 0.736932,
      "threshold": -0.359085,
      "high_risk_drugs": ["Savolitinib_1936", "Ipatasertib_1924", "Doramapimod_1042", "ABT737_1910", "AZD8186_1918"],
      "low_risk_drugs": ["GSK1904529A_1093", "Nelarabine_1814", "Ulixertinib_2047", "Talazoparib_1259", "Oxaliplatin_1089"]
    },
    "KICH": {
      "cancer_type": "肾嫌色细胞癌",
      "GPRC5B_coeff": -1.511847,
      "LSAMP_coeff": -0.019292,
      "PDGFRA_coeff": -1.862446,
      "threshold": 2.455922,
      "high_risk_drugs": ["PAK_5339_1730", "PCI-34051_1621", "AZD2014_1441", "Osimertinib_1919", "WIKI4_1940"],
      "low_risk_drugs": ["Gallibiscoquinazole_1830", "Fulvestrant_1200", "UMI-77_1939", "Taselisib_1561", "BMS-754807_2171"]
    },
    "KIRC": {
      "cancer_type": "肾透明细胞癌",
      "GPRC5B_coeff": -0.96488,
      "LSAMP_coeff": 0.650089,
      "PDGFRA_coeff": -0.753156,
      "threshold": 0.120408,
      "high_risk_drugs": ["Afatinib_1032", "YK-4-279_1239", "Nilotinib_1013", "Lapatinib_1558", "GSK343_1627"],
      "low_risk_drugs": ["IAP_5620_1428", "PLX-4720_1036", "SB505124_1194", "Sabutoclax_1849", "Pyridostatin_2044"]
    },
    "KIRP": {
      "cancer_type": "肾乳头状细胞癌",
      "GPRC5B_coeff": 0.186841,
      "LSAMP_coeff": -1.260582,
      "PDGFRA_coeff": 1.878339,
      "threshold": 1.650797,
      "high_risk_drugs": ["Lapatinib_1558", "SB505124_1194", "GNE-317_1926", "Zoledronate_1802", "OTX015_1626"],
      "low_risk_drugs": ["Cediranib_1922", "AZD5991_1720", "Crizotinib_1083", "AZD5438_1401", "Paclitaxel_1080"]
    },
    "LAML": {
      "cancer_type": "急性髓细胞样白血病",
      "GPRC5B_coeff": 1.757996,
      "LSAMP_coeff": 1.579309,
      "PDGFRA_coeff": 0.3916,
      "threshold": 2.531245,
      "high_risk_drugs": ["XAV939_1268", "LJI308_2107", "Elephantin_1835", "Fulvestrant_1816", "AZD5438_1401"],
      "low_risk_drugs": ["AZ6102_2109", "KRAS (G12C) Inhibitor-12_1855", "AZD5153_1706", "GSK343_1627", "WZ4003_1614"]
    },
    "LGG": {
      "cancer_type": "脑低级别胶质瘤",
      "GPRC5B_coeff": -1.64603,
      "LSAMP_coeff": -1.216069,
      "PDGFRA_coeff": -1.819091,
      "threshold": -1.048018,
      "high_risk_drugs": ["Fulvestrant_1200", "Paclitaxel_1080", "Carmustine_1807", "Ibrutinib_1799", "ZM447439_1050"],
      "low_risk_drugs": ["VE821_2111", "SB216763_1025", "Dactolisib_1057", "BI-2536_1086", "AZD5363_1916"]
    },
    "LIHC": {
      "cancer_type": "肝细胞肝癌",
      "GPRC5B_coeff": -0.445291,
      "LSAMP_coeff": -0.914604,
      "PDGFRA_coeff": 1.31495,
      "threshold": -0.85948,
      "high_risk_drugs": ["Irinotecan_1088", "Savolitinib_1936", "Picolinici-acid_1635", "Buparlisib_1873", "PLX-4720_1036"],
      "low_risk_drugs": ["Wnt-C59_1622", "PCI-34051_1621", "TAF1_5496_1732", "Fludarabine_1813", "Trametinib_1372"]
    },
    "LUAD": {
      "cancer_type": "肺腺癌",
      "GPRC5B_coeff": -0.876262,
      "LSAMP_coeff": 0.170784,
      "PDGFRA_coeff": -1.436303,
      "threshold": 1.813182,
      "high_risk_drugs": ["Dihydrorotenone_1827", "Cisplatin_1005", "Savolitinib_1936", "AMG-319_2045", "Pictilisib_1058"],
      "low_risk_drugs": ["Fulvestrant_1816", "GSK591_2110", "IAP_5620_1428", "BMS-754807_2171", "Cediranib_1922"]
    },
    "LUSC": {
      "cancer_type": "肺鳞癌",
      "GPRC5B_coeff": -1.701797,
      "LSAMP_coeff": 1.947548,
      "PDGFRA_coeff": 1.088979,
      "threshold": -1.807706,
      "high_risk_drugs": ["Leflunomide_1578", "Dactolisib_1057", "Cyclophosphamide_1512", "CDK9_5038_1709", "Irinotecan_1088"],
      "low_risk_drugs": ["JAK1_8709_1718", "Camptothecin_1003", "AMG-319_2045", "AZD5438_1401", "Acetalax_1804"]
    },
    "MESO": {
      "cancer_type": "间皮瘤",
      "GPRC5B_coeff": -1.977912,
      "LSAMP_coeff": 1.261846,
      "PDGFRA_coeff": 0.827429,
      "threshold": 1.374043,
      "high_risk_drugs": ["AT13148_2170", "PF-4708671_1129", "Oxaliplatin_1806", "Palbociclib_1054", "AZD5363_1916"],
      "low_risk_drugs": ["Pevonedistat_1529", "Osimertinib_1919", "ABT737_1910", "Dinaciclib_1180", "BI-2536_1086"]
    },
    "OV": {
      "cancer_type": "卵巢浆液性囊腺癌",
      "GPRC5B_coeff": 1.085081,
      "LSAMP_coeff": -1.703821,
      "PDGFRA_coeff": -0.566137,
      "threshold": -2.304786,
      "high_risk_drugs": ["GSK2606414_1618", "AT13148_2170", "Oxaliplatin_1089", "Vincristine_1818", "Fludarabine_1813"],
      "low_risk_drugs": ["Camptothecin_1003", "Ulixertinib_1908", "Alpelisib_1560", "AZD4547_1786", "Docetaxel_1007"]
    },
    "PAAD": {
      "cancer_type": "胰腺癌",
      "GPRC5B_coeff": 1.452414,
      "LSAMP_coeff": 0.493193,
      "PDGFRA_coeff": -0.676408,
      "threshold": -2.61865,
      "high_risk_drugs": ["Dactolisib_1057", "WZ4003_1614", "Uprosertib_1553", "AZ960_1250", "Afatinib_1032"],
      "low_risk_drugs": ["Sabutoclax_1849", "Nutlin-3a (-)_1047", "Mirin_1048", "Vinorelbine_2048", "JAK_8517_1739"]
    },
    "PCPG": {
      "cancer_type": "嗜铬细胞瘤和副神经节瘤",
      "GPRC5B_coeff": -0.756071,
      "LSAMP_coeff": -0.699267,
      "PDGFRA_coeff": 0.918425,
      "threshold": 0.825345,
      "high_risk_drugs": ["NU7441_1038", "AZD6482_2169", "Nelarabine_1814", "BMS-754807_2171", "Obatoclax Mesylate_1068"],
      "low_risk_drugs": ["GSK2578215A_1927", "VSP34_8731_1734", "Podophyllotoxin bromide_1825", "BMS-536924_1091", "AZD5438_1401"]
    },
    "PRAD": {
      "cancer_type": "前列腺癌",
      "GPRC5B_coeff": 1.548851,
      "LSAMP_coeff": -0.11114,
      "PDGFRA_coeff": -1.521623,
      "threshold": 1.279469,
      "high_risk_drugs": ["Fludarabine_1813", "ABT737_1910", "Picolinici-acid_1635", "SB505124_1194", "Vincristine_1818"],
      "low_risk_drugs": ["VE821_2111", "Ulixertinib_2047", "WIKI4_1940", "Gemcitabine_1190", "BIBR-1532_2043"]
    },
    "READ": {
      "cancer_type": "直肠腺癌",
      "GPRC5B_coeff": 1.04314,
      "LSAMP_coeff": 0.245109,
      "PDGFRA_coeff": 1.083869,
      "threshold": -0.037226,
      "high_risk_drugs": ["LCL161_1557", "GSK343_1627", "MIRA-1_1931", "GDC0810_1925", "GSK2606414_1618"],
      "low_risk_drugs": ["Eg5_9814_1712", "Teniposide_1809", "IRAK4_4710_1716", "AZD8055_1059", "XAV939_1268"]
    },
    "SARC": {
      "cancer_type": "肉瘤",
      "GPRC5B_coeff": 0.090931,
      "LSAMP_coeff": -0.289836,
      "PDGFRA_coeff": -1.898323,
      "threshold": -2.352651,
      "high_risk_drugs": ["EPZ004777_1237", "PLX-4720_1036", "IWP-2_1576", "Gefitinib_1010", "MG-132_1862"],
      "low_risk_drugs": ["Dihydrorotenone_1827", "YK-4-279_1239", "Fulvestrant_1200", "Vinblastine_1004", "Doramapimod_1042"]
    },
    "SKCM": {
      "cancer_type": "皮肤黑色素瘤",
      "GPRC5B_coeff": -1.874283,
      "LSAMP_coeff": 0.545642,
      "PDGFRA_coeff": -0.742576,
      "threshold": 0.051424,
      "high_risk_drugs": ["Foretinib_2040", "AZD6738_1917", "Staurosporine_1034", "YK-4-279_1239", "NU7441_1038"],
      "low_risk_drugs": ["Nilotinib_1013", "EPZ5676_1563", "Doramapimod_1042", "Topotecan_1808", "BMS-345541_1249"]
    },
    "STAD": {
      "cancer_type": "胃癌",
      "GPRC5B_coeff": 1.630266,
      "LSAMP_coeff": -1.002831,
      "PDGFRA_coeff": -0.358468,
      "threshold": 1.533307,
      "high_risk_drugs": ["AZD1332_1463", "MIRA-1_1931", "JAK_8517_1739", "SB505124_1194", "Vincristine_1818"],
      "low_risk_drugs": ["5-Fluorouracil_1073", "MK-8776_2046", "LY2109761_1852", "OF-1_1853", "VSP34_8731_1734"]
    },
    "TGCT": {
      "cancer_type": "睾丸癌",
      "GPRC5B_coeff": -1.084807,
      "LSAMP_coeff": -1.69208,
      "PDGFRA_coeff": -0.840994,
      "threshold": -2.032672,
      "high_risk_drugs": ["Talazoparib_1259", "VSP34_8731_1734", "Entospletinib_1630", "Niraparib_1177", "Alisertib_1051"],
      "low_risk_drugs": ["GSK2578215A_1927", "CDK9_5576_1708", "LGK974_1598", "Picolinici-acid_1635", "PRT062607_1631"]
    },
    "THCA": {
      "cancer_type": "甲状腺癌",
      "GPRC5B_coeff": 1.718791,
      "LSAMP_coeff": 1.232482,
      "PDGFRA_coeff": 0.533615,
      "threshold": 2.228764,
      "high_risk_drugs": ["TAF1_5496_1732", "Ulixertinib_2047", "KU-55933_1030", "NVP-ADW742_1932", "GNE-317_1926"],
      "low_risk_drugs": ["Ipatasertib_1924", "RO-3306_1052", "Staurosporine_1034", "ML323_1629", "IWP-2_1576"]
    },
    "THYM": {
      "cancer_type": "胸腺癌",
      "GPRC5B_coeff": 1.214688,
      "LSAMP_coeff": -1.25372,
      "PDGFRA_coeff": 1.570236,
      "threshold": 0.236053,
      "high_risk_drugs": ["Palbociclib_1054", "XAV939_1268", "MK-1775_1179", "Niraparib_1177", "Fulvestrant_1816"],
      "low_risk_drugs": ["ERK_6604_1714", "Paclitaxel_1080", "Picolinici-acid_1635", "PRIMA-1MET_1131", "AZD1332_1463"]
    },
    "UCEC": {
      "cancer_type": "子宫内膜癌",
      "GPRC5B_coeff": 1.229761,
      "LSAMP_coeff": 1.584365,
      "PDGFRA_coeff": -0.727986,
      "threshold": -2.339688,
      "high_risk_drugs": ["PAK_5339_1730", "XAV939_1268", "Wee1 Inhibitor_1046", "ERK_2440_1713", "Podophyllotoxin bromide_1825"],
      "low_risk_drugs": ["RO-3306_1052", "SB216763_1025", "GDC0810_1925", "Vincristine_1818", "Cytarabine_1006"]
    },
    "UCS": {
      "cancer_type": "子宫肉瘤",
      "GPRC5B_coeff": -1.088259,
      "LSAMP_coeff": -0.291569,
      "PDGFRA_coeff": 1.272059,
      "threshold": 2.164383,
      "high_risk_drugs": ["ZM447439_1050", "GSK591_2110", "BMS-345541_1249", "BMS-536924_1091", "Entospletinib_1630"],
      "low_risk_drugs": ["JAK_8517_1739", "IGF1R_3801_1738", "SB505124_1194", "GSK343_1627", "Staurosporine_1034"]
    },
    "UVM": {
      "cancer_type": "葡萄膜黑色素瘤",
      "GPRC5B_coeff": -1.972191,
      "LSAMP_coeff": 0.042989,
      "PDGFRA_coeff": -0.330356,
      "threshold": -1.667353,
      "high_risk_drugs": ["BMS-536924_1091", "PCI-34051_1621", "Camptothecin_1003", "I-BET-762_1624", "AZD5438_1401"],
      "low_risk_drugs": ["JAK1_8709_1718", "Linsitinib_1510", "Picolinici-acid_1635", "MIM1_1996", "Vinorelbine_2048"]
    }
  },
  "en": {
    "ACC": {
      "cancer_type": "Adrenocortical carcinoma",
      "GPRC5B_coeff": -0.50184,
      "LSAMP_coeff": 1.802857,
      "PDGFRA_coeff": 0.927976,
      "threshold": 0.591951,
      "high_risk_drugs": ["Osimertinib_1919", "Dactolisib_1057", "Navitoclax_1011", "Uprosertib_2106", "AZD1208_1449"],
      "low_risk_drugs": ["Talazoparib_1259", "EPZ004777_1237", "Paclitaxel_1080", "VX-11e_2096", "MK-2206_1053"]
    },
    "BLCA": {
      "cancer_type": "Bladder Urothelial Carcinoma",
      "GPRC5B_coeff": -1.375925,
      "LSAMP_coeff": -1.376022,
      "PDGFRA_coeff": -1.767666,
      "threshold": 2.197057,
      "high_risk_drugs": ["P22077_1933", "Uprosertib_2106", "Docetaxel_1819", "PD173074_1049", "BDP-00009066_1866"],
      "low_risk_drugs": ["Picolinici-acid_1635", "Nilotinib_1013", "Vorinostat_1012", "ZM447439_1050", "Tamoxifen_1199"]
    },
    "BRCA": {
      "cancer_type": "Breast invasive carcinoma",
      "GPRC5B_coeff": 0.40446,
      "LSAMP_coeff": 0.83229,
      "PDGFRA_coeff": -1.917662,
      "threshold": 2.819459,
      "high_risk_drugs": ["Daporinad_1248", "Oxaliplatin_1806", "Venetoclax_1909", "Navitoclax_1011", "Elephantin_1835"],
      "low_risk_drugs": ["Dinaciclib_1180", "Pyridostatin_2044", "GDC0810_1925", "WEHI-539_1997", "Docetaxel_1819"]
    },
    "CESC": {
      "cancer_type": "Cervical squamous cell carcinoma and endocervical adenocarcinoma",
      "GPRC5B_coeff": 1.329771,
      "LSAMP_coeff": -1.150644,
      "PDGFRA_coeff": -1.2727,
      "threshold": -1.899573,
      "high_risk_drugs": ["AGI-6780_1634", "Fulvestrant_1200", "ERK_6604_1714", "MG-132_1862", "AZD1332_1463"],
      "low_risk_drugs": ["Vinblastine_1004", "AZD6482_2169", "Irinotecan_1088", "MIM1_1996", "Picolinici-acid_1635"]
    },
    "CHOL": {
      "cancer_type": "Cholangiocarcinoma",
      "GPRC5B_coeff": -0.783031,
      "LSAMP_coeff": 0.099026,
      "PDGFRA_coeff": -0.27222,
      "threshold": -1.252625,
      "high_risk_drugs": ["Leflunomide_1578", "AZD1332_1463", "BI-2536_1086", "Tamoxifen_1199", "AT13148_2170"],
      "low_risk_drugs": ["IWP-2_1576", "MK-2206_1053", "ZM447439_1050", "PCI-34051_1621", "Alisertib_1051"]
    },
    "COAD": {
      "cancer_type": "Colon adenocarcinoma",
      "GPRC5B_coeff": 0.974964442884743,
      "LSAMP_coeff": -1.30337826305244,
      "PDGFRA_coeff": -0.639834133401197,
      "threshold": 1.591542,
      "high_risk_drugs": ["Axitinib_1021", "Bortezomib_1191", "Dabrafenib_1373", "Dasatinib_1079", "Gefitinib_1010"],
      "low_risk_drugs": ["Docetaxel_1007", "Paclitaxel_1080", "Tamoxifen_1199", "Temozolomide_1375", "Oxaliplatin_1806"]
    },
    "DLBC": {
      "cancer_type": "Lymphoid Neoplasm Diffuse Large B-cell Lymphoma",
      "GPRC5B_coeff": -0.17572,
      "LSAMP_coeff": 1.140704,
      "PDGFRA_coeff": -1.201305,
      "threshold": 0.085407,
      "high_risk_drugs": ["Nutlin-3a (-)_1047", "Dihydrorotenone_1827", "Cyclophosphamide_1512", "AZD5363_1916", "AGI-5198_1913"],
      "low_risk_drugs": ["WZ4003_1614", "OF-1_1853", "MK-1775_1179", "BPD-00008900_1998", "NU7441_1038"]
    },
    "ESCA": {
      "cancer_type": "Esophageal carcinoma",
      "GPRC5B_coeff": 0.369658,
      "LSAMP_coeff": -1.814198,
      "PDGFRA_coeff": 0.430179,
      "threshold": -1.976855,
      "high_risk_drugs": ["AZD7762_1022", "I-BRD9_1928", "YK-4-279_1239", "JQ1_2172", "Epirubicin_1511"],
      "low_risk_drugs": ["Nutlin-3a (-)_1047", "Daporinad_1248", "RO-3306_1052", "PCI-34051_1621", "AZD1332_1463"]
    },
    "GBM": {
      "cancer_type": "Glioblastoma multiforme",
      "GPRC5B_coeff": -1.739794,
      "LSAMP_coeff": 1.795542,
      "PDGFRA_coeff": 1.862528,
      "threshold": 1.850384,
      "high_risk_drugs": ["JAK1_8709_1718", "AZD8186_1918", "CZC24832_1615", "Oxaliplatin_1089", "AZD5582_1617"],
      "low_risk_drugs": ["LGK974_1598", "GSK269962A_1192", "MIRA-1_1931", "IAP_5620_1428", "WEHI-539_1997"]
    },
    "HNSC": {
      "cancer_type": "Head and Neck squamous cell carcinoma",
      "GPRC5B_coeff": -0.781545,
      "LSAMP_coeff": -1.609312,
      "PDGFRA_coeff": 0.736932,
      "threshold": -0.359085,
      "high_risk_drugs": ["Savolitinib_1936", "Ipatasertib_1924", "Doramapimod_1042", "ABT737_1910", "AZD8186_1918"],
      "low_risk_drugs": ["GSK1904529A_1093", "Nelarabine_1814", "Ulixertinib_2047", "Talazoparib_1259", "Oxaliplatin_1089"]
    },
    "KICH": {
      "cancer_type": "Kidney Chromophobe",
      "GPRC5B_coeff": -1.511847,
      "LSAMP_coeff": -0.019292,
      "PDGFRA_coeff": -1.862446,
      "threshold": 2.455922,
      "high_risk_drugs": ["PAK_5339_1730", "PCI-34051_1621", "AZD2014_1441", "Osimertinib_1919", "WIKI4_1940"],
      "low_risk_drugs": ["Gallibiscoquinazole_1830", "Fulvestrant_1200", "UMI-77_1939", "Taselisib_1561", "BMS-754807_2171"]
    },
    "KIRC": {
      "cancer_type": "Kidney renal clear cell carcinoma",
      "GPRC5B_coeff": -0.96488,
      "LSAMP_coeff": 0.650089,
      "PDGFRA_coeff": -0.753156,
      "threshold": 0.120408,
      "high_risk_drugs": ["Afatinib_1032", "YK-4-279_1239", "Nilotinib_1013", "Lapatinib_1558", "GSK343_1627"],
      "low_risk_drugs": ["IAP_5620_1428", "PLX-4720_1036", "SB505124_1194", "Sabutoclax_1849", "Pyridostatin_2044"]
    },
    "KIRP": {
      "cancer_type": "Kidney renal papillary cell carcinoma",
      "GPRC5B_coeff": 0.186841,
      "LSAMP_coeff": -1.260582,
      "PDGFRA_coeff": 1.878339,
      "threshold": 1.650797,
      "high_risk_drugs": ["Lapatinib_1558", "SB505124_1194", "GNE-317_1926", "Zoledronate_1802", "OTX015_1626"],
      "low_risk_drugs": ["Cediranib_1922", "AZD5991_1720", "Crizotinib_1083", "AZD5438_1401", "Paclitaxel_1080"]
    },
    "LAML": {
      "cancer_type": "Acute Myeloid Leukemia",
      "GPRC5B_coeff": 1.757996,
      "LSAMP_coeff": 1.579309,
      "PDGFRA_coeff": 0.3916,
      "threshold": 2.531245,
      "high_risk_drugs": ["XAV939_1268", "LJI308_2107", "Elephantin_1835", "Fulvestrant_1816", "AZD5438_1401"],
      "low_risk_drugs": ["AZ6102_2109", "KRAS (G12C) Inhibitor-12_1855", "AZD5153_1706", "GSK343_1627", "WZ4003_1614"]
    },
    "LGG": {
      "cancer_type": "Brain Lower Grade Glioma",
      "GPRC5B_coeff": -1.64603,
      "LSAMP_coeff": -1.216069,
      "PDGFRA_coeff": -1.819091,
      "threshold": -1.048018,
      "high_risk_drugs": ["Fulvestrant_1200", "Paclitaxel_1080", "Carmustine_1807", "Ibrutinib_1799", "ZM447439_1050"],
      "low_risk_drugs": ["VE821_2111", "SB216763_1025", "Dactolisib_1057", "BI-2536_1086", "AZD5363_1916"]
    },
    "LIHC": {
      "cancer_type": "Liver hepatocellular carcinoma",
      "GPRC5B_coeff": -0.445291,
      "LSAMP_coeff": -0.914604,
      "PDGFRA_coeff": 1.31495,
      "threshold": -0.85948,
      "high_risk_drugs": ["Irinotecan_1088", "Savolitinib_1936", "Picolinici-acid_1635", "Buparlisib_1873", "PLX-4720_1036"],
      "low_risk_drugs": ["Wnt-C59_1622", "PCI-34051_1621", "TAF1_5496_1732", "Fludarabine_1813", "Trametinib_1372"]
    },
    "LUAD": {
      "cancer_type": "Lung adenocarcinoma",
      "GPRC5B_coeff": -0.876262,
      "LSAMP_coeff": 0.170784,
      "PDGFRA_coeff": -1.436303,
      "threshold": 1.813182,
      "high_risk_drugs": ["Dihydrorotenone_1827", "Cisplatin_1005", "Savolitinib_1936", "AMG-319_2045", "Pictilisib_1058"],
      "low_risk_drugs": ["Fulvestrant_1816", "GSK591_2110", "IAP_5620_1428", "BMS-754807_2171", "Cediranib_1922"]
    },
    "LUSC": {
      "cancer_type": "Lung squamous cell carcinoma",
      "GPRC5B_coeff": -1.701797,
      "LSAMP_coeff": 1.947548,
      "PDGFRA_coeff": 1.088979,
      "threshold": -1.807706,
      "high_risk_drugs": ["Leflunomide_1578", "Dactolisib_1057", "Cyclophosphamide_1512", "CDK9_5038_1709", "Irinotecan_1088"],
      "low_risk_drugs": ["JAK1_8709_1718", "Camptothecin_1003", "AMG-319_2045", "AZD5438_1401", "Acetalax_1804"]
    },
    "MESO": {
      "cancer_type": "Mesothelioma",
      "GPRC5B_coeff": -1.977912,
      "LSAMP_coeff": 1.261846,
      "PDGFRA_coeff": 0.827429,
      "threshold": 1.374043,
      "high_risk_drugs": ["AT13148_2170", "PF-4708671_1129", "Oxaliplatin_1806", "Palbociclib_1054", "AZD5363_1916"],
      "low_risk_drugs": ["Pevonedistat_1529", "Osimertinib_1919", "ABT737_1910", "Dinaciclib_1180", "BI-2536_1086"]
    },
    "OV": {
      "cancer_type": "Ovarian serous cystadenocarcinoma",
      "GPRC5B_coeff": 1.085081,
      "LSAMP_coeff": -1.703821,
      "PDGFRA_coeff": -0.566137,
      "threshold": -2.304786,
      "high_risk_drugs": ["GSK2606414_1618", "AT13148_2170", "Oxaliplatin_1089", "Vincristine_1818", "Fludarabine_1813"],
      "low_risk_drugs": ["Camptothecin_1003", "Ulixertinib_1908", "Alpelisib_1560", "AZD4547_1786", "Docetaxel_1007"]
    },
    "PAAD": {
      "cancer_type": "Pancreatic adenocarcinoma",
      "GPRC5B_coeff": 1.452414,
      "LSAMP_coeff": 0.493193,
      "PDGFRA_coeff": -0.676408,
      "threshold": -2.61865,
      "high_risk_drugs": ["Dactolisib_1057", "WZ4003_1614", "Uprosertib_1553", "AZ960_1250", "Afatinib_1032"],
      "low_risk_drugs": ["Sabutoclax_1849", "Nutlin-3a (-)_1047", "Mirin_1048", "Vinorelbine_2048", "JAK_8517_1739"]
    },
    "PCPG": {
      "cancer_type": "Pheochromocytoma and Paraganglioma",
      "GPRC5B_coeff": -0.756071,
      "LSAMP_coeff": -0.699267,
      "PDGFRA_coeff": 0.918425,
      "threshold": 0.825345,
      "high_risk_drugs": ["NU7441_1038", "AZD6482_2169", "Nelarabine_1814", "BMS-754807_2171", "Obatoclax Mesylate_1068"],
      "low_risk_drugs": ["GSK2578215A_1927", "VSP34_8731_1734", "Podophyllotoxin bromide_1825", "BMS-536924_1091", "AZD5438_1401"]
    },
    "PRAD": {
      "cancer_type": "Prostate adenocarcinoma",
      "GPRC5B_coeff": 1.548851,
      "LSAMP_coeff": -0.11114,
      "PDGFRA_coeff": -1.521623,
      "threshold": 1.279469,
      "high_risk_drugs": ["Fludarabine_1813", "ABT737_1910", "Picolinici-acid_1635", "SB505124_1194", "Vincristine_1818"],
      "low_risk_drugs": ["VE821_2111", "Ulixertinib_2047", "WIKI4_1940", "Gemcitabine_1190", "BIBR-1532_2043"]
    },
    "READ": {
      "cancer_type": "Rectum adenocarcinoma",
      "GPRC5B_coeff": 1.04314,
      "LSAMP_coeff": 0.245109,
      "PDGFRA_coeff": 1.083869,
      "threshold": -0.037226,
      "high_risk_drugs": ["LCL161_1557", "GSK343_1627", "MIRA-1_1931", "GDC0810_1925", "GSK2606414_1618"],
      "low_risk_drugs": ["Eg5_9814_1712", "Teniposide_1809", "IRAK4_4710_1716", "AZD8055_1059", "XAV939_1268"]
    },
    "SARC": {
      "cancer_type": "Sarcoma",
      "GPRC5B_coeff": 0.090931,
      "LSAMP_coeff": -0.289836,
      "PDGFRA_coeff": -1.898323,
      "threshold": -2.352651,
      "high_risk_drugs": ["EPZ004777_1237", "PLX-4720_1036", "IWP-2_1576", "Gefitinib_1010", "MG-132_1862"],
      "low_risk_drugs": ["Dihydrorotenone_1827", "YK-4-279_1239", "Fulvestrant_1200", "Vinblastine_1004", "Doramapimod_1042"]
    },
    "SKCM": {
      "cancer_type": "Skin Cutaneous Melanoma",
      "GPRC5B_coeff": -1.874283,
      "LSAMP_coeff": 0.545642,
      "PDGFRA_coeff": -0.742576,
      "threshold": 0.051424,
      "high_risk_drugs": ["Foretinib_2040", "AZD6738_1917", "Staurosporine_1034", "YK-4-279_1239", "NU7441_1038"],
      "low_risk_drugs": ["Nilotinib_1013", "EPZ5676_1563", "Doramapimod_1042", "Topotecan_1808", "BMS-345541_1249"]
    },
    "STAD": {
      "cancer_type": "Stomach adenocarcinoma",
      "GPRC5B_coeff": 1.630266,
      "LSAMP_coeff": -1.002831,
      "PDGFRA_coeff": -0.358468,
      "threshold": 1.533307,
      "high_risk_drugs": ["AZD1332_1463", "MIRA-1_1931", "JAK_8517_1739", "SB505124_1194", "Vincristine_1818"],
      "low_risk_drugs": ["5-Fluorouracil_1073", "MK-8776_2046", "LY2109761_1852", "OF-1_1853", "VSP34_8731_1734"]
    },
    "TGCT": {
      "cancer_type": "Testicular Germ Cell Tumors",
      "GPRC5B_coeff": -1.084807,
      "LSAMP_coeff": -1.69208,
      "PDGFRA_coeff": -0.840994,
      "threshold": -2.032672,
      "high_risk_drugs": ["Talazoparib_1259", "VSP34_8731_1734", "Entospletinib_1630", "Niraparib_1177", "Alisertib_1051"],
      "low_risk_drugs": ["GSK2578215A_1927", "CDK9_5576_1708", "LGK974_1598", "Picolinici-acid_1635", "PRT062607_1631"]
    },
    "THCA": {
      "cancer_type": "Thyroid carcinoma",
      "GPRC5B_coeff": 1.718791,
      "LSAMP_coeff": 1.232482,
      "PDGFRA_coeff": 0.533615,
      "threshold": 2.228764,
      "high_risk_drugs": ["TAF1_5496_1732", "Ulixertinib_2047", "KU-55933_1030", "NVP-ADW742_1932", "GNE-317_1926"],
      "low_risk_drugs": ["Ipatasertib_1924", "RO-3306_1052", "Staurosporine_1034", "ML323_1629", "IWP-2_1576"]
    },
    "THYM": {
      "cancer_type": "Thymoma",
      "GPRC5B_coeff": 1.214688,
      "LSAMP_coeff": -1.25372,
      "PDGFRA_coeff": 1.570236,
      "threshold": 0.236053,
      "high_risk_drugs": ["Palbociclib_1054", "XAV939_1268", "MK-1775_1179", "Niraparib_1177", "Fulvestrant_1816"],
      "low_risk_drugs": ["ERK_6604_1714", "Paclitaxel_1080", "Picolinici-acid_1635", "PRIMA-1MET_1131", "AZD1332_1463"]
    },
    "UCEC": {
      "cancer_type": "Uterine Corpus Endometrial Carcinoma",
      "GPRC5B_coeff": 1.229761,
      "LSAMP_coeff": 1.584365,
      "PDGFRA_coeff": -0.727986,
      "threshold": -2.339688,
      "high_risk_drugs": ["PAK_5339_1730", "XAV939_1268", "Wee1 Inhibitor_1046", "ERK_2440_1713", "Podophyllotoxin bromide_1825"],
      "low_risk_drugs": ["RO-3306_1052", "SB216763_1025", "GDC0810_1925", "Vincristine_1818", "Cytarabine_1006"]
    },
    "UCS": {
      "cancer_type": "Uterine Carcinosarcoma",
      "GPRC5B_coeff": -1.088259,
      "LSAMP_coeff": -0.291569,
      "PDGFRA_coeff": 1.272059,
      "threshold": 2.164383,
      "high_risk_drugs": ["ZM447439_1050", "GSK591_2110", "BMS-345541_1249", "BMS-536924_1091", "Entospletinib_1630"],
      "low_risk_drugs": ["JAK_8517_1739", "IGF1R_3801_1738", "SB505124_1194", "GSK343_1627", "Staurosporine_1034"]
    },
    "UVM": {
      "cancer_type": "Uveal Melanoma",
      "GPRC5B_coeff": -1.972191,
      "LSAMP_coeff": 0.042989,
      "PDGFRA_coeff": -0.330356,
      "threshold": -1.667353,
      "high_risk_drugs": ["BMS-536924_1091", "PCI-34051_1621", "Camptothecin_1003", "I-BET-762_1624", "AZD5438_1401"],
      "low_risk_drugs": ["JAK1_8709_1718", "Linsitinib_1510", "Picolinici-acid_1635", "MIM1_1996", "Vinorelbine_2048"]
    }
  }
}