// miniprogram/pages/bird/bird.js
import * as echarts from '../../ec-canvas/echarts';

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);
  var data1 = {
  "name": "鸟种",
    "children": [{
      "name": "雁形目",
      "children": [{
        "name": "鸭科"
      }]
    }, {
      "name": "鸡形目",
      "children": [{
        "name": "雉科"
      }]
    }, {
      "name": "潜鸟目",
      "children": [{
        "name": "潜鸟科"
      }]
    }, {
      "name": "鹱形目",
      "children": [{
        "name": "洋海燕科"
      },{
        "name": "海燕科"
      },{
        "name": "信天翁科"
      },{
        "name": "鹱科"
      }]
    }, {
      "name": "䴙䴘目",
      "children": [{
        "name": "䴙䴘科"
      }]
    }, {
      "name": "红鹳目",
      "children": [{
        "name": "红鹳科"
      }]
    }, {
      "name": "鹲形目",
      "children": [{
        "name": "鹲科"
      }]
    }, {
      "name": "鹳形目",
      "children": [{
        "name": "鹳科"
      }]
    }, {
      "name": "鹈形目",
      "children": [{
        "name": "鹈鹕科"
      },{
        "name": "鹮科"
      },{
        "name": "鹭科"
      }]
    }, {
      "name": "鲣鸟目",
      "children": [{
        "name": "军舰鸟科"
      },{
        "name": "鲣鸟科"
      },{
        "name": "鸬鹚科"
      }]
    }, {
      "name": "鹰形目",
      "children": [{
        "name": "鹗科"
      },{
        "name": "鹰科"
      }]
    }, {
      "name": "鸨形目",
      "children": [{
        "name": "鸨科"
      }]
    }, {
      "name": "鹤形目",
      "children": [{
        "name": "秧鸡科"
      },{
        "name": "鹤科"
      }]
    }, {
      "name": "鸻形目",
      "children": [{
        "name": "三趾鹑科"
      },{
        "name": "石鸻科"
      },{
        "name": "砺鹬科"
      },{
        "name": "鹮嘴鹬科"
      },{
        "name": "反嘴鹬科"
      },{
        "name": "鸻科"
      },{
        "name": "彩鹬科"
      },{
        "name": "水稚科"
      },{
        "name": "鹬科"
      },{
        "name": "燕鸻科"
      },{
        "name": "鸥科"
      },{
        "name": "贼鸥科"
      },{
        "name": "海雀科"
      }]
    }, {
      "name": "沙鸡目",
      "children": [{
        "name": "沙鸡科"
      }]
    }, {
      "name": "鸽形目",
      "children": [{
        "name": "鸠鸽科"
      }]
    }, {
      "name": "鹃形目",
      "children": [{
        "name": "杜鹃科"
      }]
    }, {
      "name": "鸮形目",
      "children": [{
        "name": "草鸮科"
      },{
        "name": "鸱鸮科"
      }]
    }, {
      "name": "夜鹰目",
      "children": [{
        "name": "蛙口夜鹰科"
      },{
        "name": "夜鹰科"
      }]
    }, {
      "name": "雨燕目",
      "children": [{
        "name": "凤头雨燕科"
      },{
        "name": "雨燕科"
      }]
    }, {
      "name": "咬鹃目",
      "children": [{
        "name": "咬鹃科"
      }]
    }, {
      "name": "佛法僧目",
      "children": [{
        "name": "佛法僧科"
      },{
        "name": "蜂虎科"
      },{
        "name": "翠鸟科"
      }]
    }, {
      "name": "犀鸟目",
      "children": [{
        "name": "犀鸟科"
      },{
        "name": "戴胜科"
      }]
    }, {
      "name": "啄木鸟目",
      "children": [{
        "name": "拟啄木鸟科"
      },{
        "name": "响蜜䴕科"
      },{
        "name": "啄木鸟科"
      }]
    }, {
      "name": "隼形目",
      "children": [{
        "name": "隼科"
      }]
    }, {
      "name": "鹦鹉目",
      "children": [{
        "name": "鹦鹉科"
      }]
    }, {
      "name": "雀形目",
      "children": [{
        "name": "阔嘴鸟科"
      },{
        "name": "八色鸫科"
      },{
        "name": "钩嘴鵙科"
      },{
        "name": "燕鵙科"
      },{
        "name": "雀鹎科"
      },{
        "name": "山椒鸟科"
      },{
        "name": "伯劳科"
      },{
        "name": "莺雀科"
      },{
        "name": "黄鹂科"
      },{
        "name": "卷尾科"
      },{
        "name": "扇尾鹟科"
      },{
        "name": "王鹟科"
      },{
        "name": "鸦科"
      },{
        "name": "太平鸟科"
      },{
        "name": "玉鹟科"
      },{
        "name": "山雀科"
      },{
        "name": "攀雀科"
      },{
        "name": "文须雀科"
      },{
        "name": "百灵科"
      },{
        "name": "鹎科"
      },{
        "name": "燕科"
      },{
        "name": "鳞胸鹪鹛科"
      },{
        "name": "树莺科"
      },{
        "name": "长尾山雀科"
      },{
        "name": "柳莺科"
      },{
        "name": "苇莺科"
      },{
        "name": "蝗莺科"
      },{
        "name": "扇尾莺科"
      },{
        "name": "林鹛科"
      },{
        "name": "幽鹛科"
      },{
        "name": "雀鹛科"
      },{
        "name": "噪鹛科"
      },{
        "name": "莺鹛科"
      },{
        "name": "鸦雀科"
      },{
        "name": "绣眼鸟科"
      },{
        "name": "和平鸟科"
      },{
        "name": "戴菊科"
      },{
        "name": "丽星鹩鹛科"
      },{
        "name": "鹪鹩科"
      },{
        "name": "䴓科"
      },{
        "name": "旋壁雀科"
      },{
        "name": "旋木雀科"
      },{
        "name": "椋鸟科"
      },{
        "name": "鸫科"
      },{
        "name": "鹟科"
      },{
        "name": "河乌科"
      },{
        "name": "叶鹎科"
      },{
        "name": "啄花鸟科"
      },{
        "name": "花蜜鸟科"
      },{
        "name": "雀科"
      },{
        "name": "织雀科"
      },{
        "name": "梅花雀科"
      },{
        "name": "岩鹨科"
      },{
        "name": "鹡鸰科"
      },{
        "name": "朱鹀科"
      },{
        "name": "燕雀科"
      },{
        "name": "铁爪鹀科"
      },{
        "name": "鹀科"
      },{
        "name": "雀鹀科"
      }]
    } ]
  };

  var option = {
    series: [{
      type: 'tree',

      initialTreeDepth: 1,

      name: 'tree1',

      data: [data1],

      top: '0%',
      left: '5%',
      bottom: '0%',
      right: '28%',


      symbolSize: 10,
      symbol: 'circle',

      label: {
        normal: {
          position: 'right',
          verticalAlign: 'middle',
          align: 'left',
          color: 'black'
        }
      }

    }]
  };

  chart.setOption(option);
  return chart;
}
Page({

  data: {
    ec: {
      onInit: initChart
    },
    TabCur: 0,
    scrollLeft:0,
    cardCur: 0,
    swiperList: [{
      id: '海鸥',
      name:'Mew Gull',
      scientificName:'Larus canus',
      picUrl:'http://www.szbird.org.cn/cnbird/mysite/jpg/2009-3/20093135045314.jpg',
      IUCN:'LC',
      color:'green',
      L:'44~52 cm',
      shengjing:'适应各种湿地环境，通常出现于海岸地带，但在内陆湖泊也可见到。',
      xixing:'成对或集小群分布，飞行流畅，振翅充分。',
      fenbu:'L. c. kamtschatschensis 遍及除西藏外的全国各地，沿海地区秋冬季常见，内陆偶见； L. c. heinei 目前主要记录于黄海和渤海的沿海地区，记录较L. c. kamtschatschensis 少。',
      mingsheng:'音调极高，尖细短促的“啊啊”（a~a~a~）声。'

    }, {
      id: '震旦鸦雀',
      name:'Reed Parrotbill',
      scientificName:'Calamornis heudei',
      picUrl:'http://www.szbird.org.cn/cnbird/mysite/jpg/2007-6/20076304914832.jpg',
      IUCN:'NT',
      color:'olive',
      L:'18~20 cm',
      shengjing:'高度依赖芦苇丛。',
      xixing:'成对或集群活动，在芦苇从中穿梭，用喙要开芦苇取食昆虫，基本不会长距离飞行。',
      fenbu:'C. h. polivanovi 见于黑龙江东北部； C. h. heudei 见于辽宁至浙江各地的沿海地区，以及北京 、河南、湖北、江西、安徽。',
      mingsheng:'鸣声为连串的“啾啾啾啾”（jiujiu）声，四声一度，或者一连串急促的“jijijiji”声。明昌为连串的“chu-chu”声，节奏逐渐加快。'
    }, {
      id: '红嘴相思鸟',
      name:'Red-billed Leiothrix',
      scientificName:'Leiothrix lutea',
      picUrl:'http://www.szbird.org.cn/cnbird/mysite/jpg/2009-5/20095275479556.jpg',
      IUCN:'LC',
      color:'green',
      L:'14~15 cm',
      shengjing:'通常见于海拔900~2400 m 的常绿阔叶林、混交林、林缘、次生林、各种灌丛、弃耕地、茶园或竹林的林下层。',
      xixing:'繁殖期成对活动，其他时期集小群，有时也会加入鸟浪。喜在林下快速窜动或攀爬树干，也会在地面搜寻食物。',
      fenbu:'地方性常见留鸟。L. l. lutea 从四川中部、甘肃南部、陕西南部分布到安徽中部、江苏南部、浙江和福建，南至贵州和广西北部；L. l. calipyga 分布于西藏东南部；L. l. yunnanensis 分布于云南西部和西北部；L. l. kwangtungensis 从云南东南部分布到广西中部、湖南南部和广东。因被大量非法捕捉，野外种群数量明显下降。',
      mingsheng:'鸣唱主要分为3种，第一种冗长且结构复杂，为多至15个音符的急促颤音；第二种较短且有固定的音节顺序；第三种是雄性求偶时发出的，旋律较为简单。鸣叫为低沉短促的“zhirk”声或“zhri-zhri-zhri”声。'
    }, {
      id: '花田鸡',
      name:"Swinhoe's Rail",
      scientificName:'Coturnicops exquisitus',
      picUrl:'http://www.szbird.org.cn/cnbird/mysite/jpg/2004-5/2004525231345_0306.jpg',
      IUCN:'VU',
      color:'yellow',
      L:'12~14 cm',
      shengjing:'栖息于潮湿草滩和沼泽，或湿地边的高草生境。',
      xixing:'晨昏活动，隐蔽性极强，受惊时亦较少飞行而选择在草中逃匿。',
      fenbu:'繁殖于东北，迁徙经华北、西南地区至长江中下游和华南越冬，少见。',
      mingsheng:'繁殖期鸣声似连续的“嘎嘎-咕”声。鸣叫为拖长的颤音。'
    }, {
      id: '丹顶鹤',
      name:'Red-crowned Crane',
      scientificName:'Grus japonensis',
      picUrl:'http://www.szbird.org.cn/cnbird/mysite/jpg/2004-5/200452220239_0305.jpg',
      IUCN:'EN',
      color:'orange',
      L:'138~152 cm',
      shengjing:'偏好洁净而开阔的湿地，是对湿地环境变化最为敏感的指示生物。繁殖期营巢于密布芦苇、莎草、猫尾草的沼泽或湿地，迁徙及越冬时活动于河口、淡水湿地、沿海盐沼、滩涂、农田和休耕地等环境。',
      xixing:'在繁殖地和越冬地通常成对或成家族群活动，迁徙季节常由数个或数十个家族群结成较大的群体，有时集群多达数十只甚至上百只，呈“V”字形编队飞行。喜缓慢行走，在水中或地面轻啄觅食。',
      fenbu:'少见的候鸟。繁殖于我国东北和内蒙古锡林郭勒，越冬于黄河三角洲和江苏盐城，迁徙经东北、华北，非繁殖期偶尔游荡至东南和华南地区及台湾。',
      mingsheng:'高亢且具有穿透力的号角声。'
    }, {
      id: '棕背伯劳',
      name:'Long-tailed Shrike',
      scientificName:'Lanius schach',
      picUrl:'http://www.szbird.org.cn/cnbird/mysite/jpg/2004-5/200452221155_0616.jpg',
      IUCN:'LC',
      color:'green',
      L:'20~25 cm',
      shengjing:'活动于平原和丘陵地带，适应农田、荒地、林地、苗圃等多种生境，常至村庄附近活动。可至海拔1600m。',
      xixing:'常单独活动，领域性较强，会驱逐进入领地的同类。常站在开阔地的高枝、电线等高处观察四周，伺机猎食，停栖时尾羽有画圈动作。肉食性，性情凶猛，食性较广，有捕鱼的记录。',
      fenbu:'L. s. schach 为华中、华东、华南及东南地区的常见留鸟，近年呈向北扩散趋势，在西北、华北多地都已建立稳定种群，黑色型（深色型）常见于华南至东南沿海；L. s tricolor 为云南、西藏东南部常见留鸟；L. s. erythronotus 仅分布于新疆极西部（喀什），为少见留鸟或旅鸟；L. s. nasutus 在台湾（兰屿）有迷鸟记录。',
      mingsheng:'鸣声多样，多为粗哑刺耳的叫声，也有婉转而复杂多变的鸣唱。能模仿多种雀鸟的鸣唱，推测是为了丰富曲库，向雌鸟炫耀歌喉。'
    }, {
      id: '大鸨',
      name:'Great Bustard',
      scientificName:'Otis tarda',
      picUrl:'http://www.szbird.org.cn/cnbird/mysite/jpg/2017-12/201712197079060.jpg',
      IUCN:'VU',
      color:'yellow',
      L:'90~105 cm(♂） 75~85 cm（♀）',
      shengjing:'繁殖期多栖息于丘陵地带开阔的干草原、稀树草原、荒漠草原和农田。冬季多栖息于临近大面积湖泊和河流的浅水湖泊、草甸、草原和麦地。',
      xixing:'繁殖期雄鸟多聚集在一起进行求偶炫耀，吸引雌鸟。实行多配制，孵卵、育雏工作由雌鸟承担。',
      fenbu:'O. t. tarda 繁殖于新疆北部，偶尔在繁殖区越冬；O. t. dybowskii 繁殖于内蒙古东部、吉林西部及黑龙江西南部。越冬于华北、黄河、渭河及长江流域，南可远及贵州草海。',
      mingsheng:'通常不叫。雄鸟炫耀时发出呻吟。'
    },{
      id: '彩鹬',
      name:'Greater Painted Snipe',
      scientificName:'Rostratula Benghalensis',
      picUrl:'http://www.cnbird.org.cn/mysite/jpg/2020-9/20209218263076.jpg',
      IUCN:'LC',
      color:'green',
      L:'23~28 cm',
      shengjing:'栖息于芦苇水塘、沼泽、湿润草地、稻田及红树林等低海拔湿地生境。',
      xixing:'繁殖期常单独或以家庭为单位活动，繁殖期后集小群。行走时尾上下抖动。收到惊扰时静止不动或快速钻入植被中，不易惊飞。遇到危险时，成鸟会猛然打开翅膀，恐吓对方。一雌多雄制，雄鸟负责孵卵及育雏。杂食性，夜晚亦会觅食。',
      fenbu:'繁殖于北至环渤海地区、西至四川盆地的北方地区，在长江以南为留鸟，地方性常见。',
      mingsheng:'雌鸟在繁殖期黄昏常发出持续、低沉的“呜，呜”叫声，彻夜不停；雄鸟会发出低沉的鸣叫，以警告进入其巢区的入侵者。'
    },{
      id: '遗鸥',
      name:'Relict Gull',
      scientificName:'Ichthyaetus relictus',
      picUrl:'http://www.cnbird.org.cn/mysite/jpg/2019-7/20197286034187.jpg',
      IUCN:'VU',
      color:'yellow',
      L:'38~46 cm',
      shengjing:'繁殖期活动于荒漠湖泊的湖心岛上，随降水而游荡，冬季栖息于河口、海岸。',
      xixing:'常集群活动，在滩涂上觅食，也会在海面游泳。',
      fenbu:'繁殖于新疆艾比湖、陕西北部至内蒙古中、东部，集中越冬于渤海湾，在越冬地点可见数千只的大群，也有个别个体在黄海至东海沿岸越冬，迷鸟至青海、云南、湖北等地。',
      mingsheng:'较少名叫，有时发出干涩的“aha~”的叫声。'
    },{
      id: '白鹭',
      name:'Little Egret',
      scientificName:'Egretta garzetta',
      picUrl:'http://www.szbird.org.cn/cnbird/mysite/jpg/2018-1/2018116513122.jpg',
      IUCN:'LC',
      color:'green',
      L:'55~68 cm',
      shengjing:'栖息于湖泊、沼泽、稻田等各类湿地。',
      xixing:'飞行时颈部缩成“S”形，飞行较缓慢。营巢于高大乔木上。',
      fenbu:'全国分布，非常常见。',
      mingsheng:'单调而嘶哑的“wa~”声。'
    },{
      id: '叽咋柳莺',
      name:'Common Chiffchaff',
      scientificName:'Phylloscopus collybita',
      picUrl:'http://www.szbird.org.cn/cnbird/mysite/jpg/2008-1/200810194821562.jpg',
      IUCN:'LC',
      color:'green',
      L:'10~11.5 cm',
      shengjing:'繁殖期栖息于山地森林，尤以林下灌木较发达的针叶林和河谷与溪流两岸的树丛与柳灌丛中比较常见。迁徙时出现在荒漠灌丛、河谷柳树丛、芦苇丛、草丛以及平原绿洲的树林中。',
      xixing:'常单独或成对活动。性活泼，行动敏捷，在灌木和树枝间不停的跳跃或飞翔。',
      fenbu:'繁殖于新疆阿尔泰山，迁徙期常见于新疆各地，偶见于青海、北京、河南、安徽、上海、湖北、四川、香港及台湾。',
      mingsheng:'鸣声较低，声似“chi-vi，chi，vi，vhi，vi……”。'
    },{
      id: '黑鹳',
      name:'Black Stork',
      scientificName:'Ciconia nigra',
      picUrl:'http://www.szbird.org.cn/cnbird/mysite/jpg/2017-12/201712203146964.jpg',
      IUCN:'LC',
      color:'green',
      L:'100~120 cm',
      shengjing:'繁殖期多选择靠近山崖的河流觅食，在崖壁上筑巢，越冬时会选择沼泽地、浅水湖泊等处。',
      xixing:'常集群活动，在小河流和湖泊中觅食，常在树上或崖壁上休息。',
      fenbu:'分布于西藏之外的我国大部分地区，于东北、华北和西北繁殖，长江流域、西南高原湖泊越冬，不常见，但在集中繁殖或越冬区较易见。',
      mingsheng:'通常沉默，但是会发出一种特殊的咕咕声。'
    },{
      id: '石鸡',
      name:'Chukar Partridge',
      scientificName:'Alectoris chukar',
      picUrl:'http://www.szbird.org.cn/cnbird/mysite/jpg/2008-6/20086206556423.jpg',
      IUCN:'LC',
      color:'green',
      L:'30~37 cm',
      shengjing:'栖息于低山丘陵、黄土高原、多岩山坡和林缘灌丛等生境。',
      xixing:'喜集群活动，奔跑迅速，很机警。隐蔽色好，在多石山坡上不易被发现。季节性垂直迁移。',
      fenbu:'华北至西北地区的常见物种。A. c. falki 见于新疆西部和中部；A. c. dzungarica 见于新疆西北部；A. c. pallida 见于新疆西部、南部和青海北部；A. c. pallescens 见于新疆、西藏西部；A. c. potanini 见于西北地区；A. c. pubescens 见于华北至西北地区东部。',
      mingsheng:'一串单调重复的“ka~ka~ka~ka~”声。'
    },{
      id: '雕鸮',
      name:'Eurasian Eagle-Owl',
      scientificName:'Bubo bubo',
      picUrl:'http://www.szbird.org.cn/cnbird/mysite/jpg/2012-8/20128297478517.jpg',
      IUCN:'LC',
      color:'green',
      L:'59~73 cm',
      shengjing:'栖息于山地森林、平原、荒野、林缘灌丛、疏林以及裸露的高山和峭壁等各类生境中，可生活在海拔3000m以上的地区。通常在人迹罕至的偏僻之地活动。',
      xixing:'除繁殖期外，通产单独活动。夜行性，白天常在树上、崖壁、枯草丛中休息。听力发达，有人靠近时立即睁眼观察，如果过于接近，会转动身体立即飞走。飞行慢而无声，常低空飞行。',
      fenbu:'除海南及台湾地区外，广泛分布于我国各地，多为当地少见留鸟。B. b .hemachalanus 分布于内蒙古、甘肃、新疆、西藏、青海、云南西部、四川西部等地区；B. b tibetanus 分布于甘肃西南部、西藏、青海、四川西部、云南西北部；B. b. kiautschensis 分布于山东、河南、陕西、重庆、贵州、湖北、江西、浙江、福建、香港等地区；B. b. turcomanus 分布于新疆；B. b tarimentsis 分布于新疆东北部；B. b. ussuriensis 分布于黑龙江、吉林、北京、河北、山东等地区；B. b. yenisseensis 分布于新疆北部地区。',
      mingsheng:'偶尔发出响亮的两声一度的“wu wu”声。'
    },{
      id: '白眼潜鸭',
      name:'Ferruginous Pochard',
      scientificName:'Aythya nyroca',
      picUrl:'http://www.cnbird.org.cn/mysite/jpg/2018-11/201811218505582.jpg',
      IUCN:'NT',
      color:'olive',
      L:'33~43 cm',
      shengjing:'喜水流缓慢的湖泊、池塘、水库等水域，与其他潜鸭相比更喜欢封闭的水体，较少出现于咸水水域。',
      xixing:'单独、成对或集成几十只至数百只的群活动。会潜水，但与其他潜鸭相比潜水时间较短，飞行时振翅较快。',
      fenbu:'繁殖于我国西部；越冬于四川中部、长江中下游至华南地区和台湾；迁徙时见于我国绝大部分地区，较常见。',
      mingsheng:'短促的“咔咔”（gekk）声，繁殖期过后很少鸣叫。'
    },{
      id: '白鹤',
      name:'Siberian Crane',
      scientificName:'Leucogeranus leucogeranus',
      picUrl:'http://www.cnbird.org.cn/mysite/jpg/2020-12/202012103997908.jpg',
      IUCN:'CR',
      color:'red',
      L:'125~140 cm',
      shengjing:'对栖息地要求最特化的鹤类，高度依赖浅水湿地。迁徙时停栖于河口湿地，冬季活动于长江流域季节性湖泊的浅滩和沼泽。',
      xixing:'常单独、成对或成家族群活动，迁徙时常集大群，到达越冬地后分散为小群活动，迁徙前期又汇集成大群。采食时常将头和喙沉浸在水中，慢慢地边走边采食，喜挖掘水生植物的根、茎和芽等。性胆小而机警，稍有动静便立刻起飞，飞行时排成“一”字形或“人”字形。',
      fenbu:'少见的冬候鸟和旅鸟，除了已知的越冬地和迁徙停歇地外都不易见到。迁徙时经过东北和华北，中途只在几个大型湿地短暂停息，补充能量；主要越冬于长江中游，最大的越冬种群位于江西鄱阳湖，少量越冬于长江下游至东南、华南地区，迷鸟至台湾。',
      mingsheng:'犹如笛声、充满韵律的“koonk、koonk”声。'
    }
  ],
  },

  onLoad: function() {
    const titles = ['鸟类图鉴','分类体系', '身体结构']
    const tabs = titles.map(item => ({title: item}))
    this.setData({tabs})
    
  },
  onShow(){
    this.getTabBar().setData({
      selected: 1
    })
  },
  
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  },
  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  
})