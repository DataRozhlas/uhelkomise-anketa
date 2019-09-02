import { h, render } from "preact";
import { byeIE } from "./byeie";
/** @jsx h */

byeIE()
let host = "https://data.irozhlas.cz";
if (window.location.hostname === "localhost") {
  host = "http://localhost:8888";
}

function whatCol(val) {
  if (val === "politik") {
    return "blue";
  } else if (val === "ústřední úřad") {
    return "brown"
  }else if (val === "odbory a zaměstnavatelé") {
    return "red"
  } else if (val === "ekolog") {
    return "green"
  } else if (val === "regionální politik") {
    return "orange"
  } else if (val === "univerzity") {
    return "purple"
  }
};

function onLoad(e) {
  const data = JSON.parse(e.target.response);
  render((
    <div id="anketa">
      {data.map(el => (
        <div className="respondent">
          <img className="portret" src={`${host}/uhelkomise-anketa/img/${el.img}`} alt={el.jm} />
          <div className={`${whatCol(el.k)}_b bio`}>{`${el.k}`}</div>
          <div className="bio">
            <div className="jmeno">{`${el.j} ${el.p}`}</div>
            <div className="funkce">{el.f}</div>
          </div>
          <div className={`odpoved1`}>{el.o1 || "Bez odpovědi"}</div>
          <div className={`odpoved2`}>{el.o2}</div>
        </div>
      ))}
    </div>
  ), document.getElementById("anketa-wrapper"));
}

let r = new XMLHttpRequest()
r.addEventListener("load", onLoad)
r.open("GET", host + "/uhelkomise-anketa/data/data.json")
r.send()

var elektrarny = [{n: "Albania", j: "Albánie", b: "#a50026", t: "V současnosti bez uhelných elektráren.<br><br>V jižní části bývalé Jugoslávie se připravují nové uhelné elektrárny o výkonu 6,6 GW. Z toho 1,7 GW elektráren má stavební povolení, dalších 4,9 GW buď dosud povolení nemá, nebo jim vypršelo a nebylo obnoveno. Všechny jsou nicméně součástí oficiálních plánů. Bosna a Hercegovina spolupracuje s Čínou na několika uhelných elektrárnách, financovaných půjčkami čínských bank. Průměrný věk uhelných elektráren v regionu je přes 40 let, v současnosti proto nesplňují normy EU na znečištění. Výjimku mají do roku 2028."}, {n: "Belgium", j: "Belgie", b: "#006837", t: "Belgie je první a dosud jediný člen EU, který odstavil všechny uhelné elektrárny. Poslední z nich byla zavřena v březnu 2016. Belgie se tak rozhodla proto, že její stárnoucí uhelné elektrárny přestaly splňovat unijní pravidla ohledně znečištění."}, {n: "Bosnia and Herzegovina", j: "Bosna a Hercegovina", b: "#a50026", t: "V jižní části bývalé Jugoslávie se připravují nové uhelné elektrárny o výkonu 6,6 GW. Z toho 1,7 GW elektráren má stavební povolení, dalších 4,9 GW buď dosud povolení nemá, nebo jim vypršelo a nebylo obnoveno. Všechny jsou nicméně součástí oficiálních plánů. Bosna a Hercegovina spolupracuje s Čínou na několika uhelných elektrárnách, financovaných půjčkami čínských bank. Průměrný věk uhelných elektráren v regionu je přes 40 let, v současnosti proto nesplňují normy EU na znečištění. Výjimku mají do roku 2028."}, {n: "Bulgaria", j: "Bulharsko", b: "#d73027", t: "Bulharsko dosud nemá dlouhodobou energetickou strategii, diskuze o odstavení uhelných elektráren vůbec neprobíhá. V provozu je řada starých a špinavých elektráren. Vláda se ohledně provozu eletráren spoléhá na výjimky z evropských pravidel a přeměnu energetiky nechystá."}, {n: "Montenegro", j: "Černá hora", b: "#a50026", t: "V jižní části bývalé Jugoslávie se připravují nové uhelné elektrárny o výkonu 6,6 GW. Z toho 1,7 GW elektráren má stavební povolení, dalších 4,9 GW buď dosud povolení nemá, nebo jim vypršelo a nebylo obnoveno. Všechny jsou nicméně součástí oficiálních plánů. Bosna a Hercegovina spolupracuje s Čínou na několika uhelných elektrárnách, financovaných půjčkami čínských bank. Průměrný věk uhelných elektráren v regionu je přes 40 let, v současnosti proto nesplňují normy EU na znečištění. Výjimku mají do roku 2028."}, {n: "Czech Republic", j: "Česko", b: "#d73027", t: "Česko čelí řadě výzev ohledně znečištění, které produkují stárnoucí uhelné elektrárny. Země si uvědomuje potřebu transformace hnědouhelných oblastí."}, {n: "Denmark", j: "Dánsko", b: "#006837", t: "Konec uhelné energetiky do roku 2030.<br><br>Dánsko se stalo členem Aliance post-uhelné energetiky (Powering Past Coal Alliance) a oznámilo, že skončí s uhelnými zdroji do roku 2030. Největší dánská energetická firma Ørsted navíc oznámila, že přestane využívat uhlí do roku 2023. Řada kogeneračních tepelných elektráren proto zvažuje ukončení provozu dříve než v roce 2030. Dánské nevládní organizace nicméně po vládě požadují odstoupení od uhlí do roku 2025, rok 2030 považují za málo ambiciózní."}, {n: "Estonia", j: "Estonsko", b: "#bababa", t: "Bez uhelných elektráren"}, {n: "Finland", j: "Finsko", b: "#006837", t: "Konec uhelné energetiky do května 2029.<br><br>Po dlouhodobém tlaku veřejnosti prošel v únoru 2019 finským parlamentem zákon, který zakazuje využívat uhlí v energetice po 1. květnu 2029. Součástí zákona jsou dotace ve výši 90 milionů euro, které mají motivovat energetické firmy pro ukončení uhelných provozů už o čtyři roky dříve. Polovina této dotace má za cíl nahradit spalování uhlí pálením biomasy, druhá polovina chce podpořit technologie, které mohou nahradit biomasu a zemní plyn nahradit.<br><br>Po zveřejnění loňské zprávy Mezivládního panelu pro změny klimatu (IPCC) a varování, že pro udržení nárůstu teploty o 1,5 °C je potřeba snížit emise do 12 let, nevládní organizace požadují odstoupení od uhlí do roku 2025."}, {n: "France", j: "Francie", b: "#006837", t: "Konec uhelné energetiky do roku 2021.<br><br>Minulá francouzská vláda se zavázala k odstavení všech uhelných elektráren do roku 2023, současný prezident Macron její slib na klimatickém shromáždění OSN ještě přitvrdil na rok 2021. Ani minulá, ani současná administrativa nicméně dosud nepředstavily nástroje, které by měly k odstoupení od uhlí vést. Součástí přeměny francouzské energetiky má být „tranziční smlouva“, která má zajistit, aby opatření byla sociálně spravedlivá a přijatelná pro nejhůř postižené regiony."}, {n: "Croatia", j: "Chorvatsko", b: "#d73027", t: "Chorvatsko provozuje dva černouhelné bloky s poměrně nízkým výkonem, jeden z nich měl být po vstupu země do EU na konci roku 2017 odstaven. Provozovatel nyní zvažuje, zda ho modernizovat."}, {n: "Ireland", j: "Irsko", b: "#006837", t: "Konec uhelné energetiky do roku 2025.<br><br>V březnu 2018 irský ministr pro změnu klimatu oznámil připojení země k Alianci post-uhelné energetiky (Powering Past Coal Alliance) a uzavření uhelných elektráren do roku 2025. Ve stejném roce vláda prosadila zákaz uhlí pro domácí vytápění, v červenci pak irský parlament odhlasoval prodej podílu na všech elektrárnách spalujících uhlí, plyn, ropu nebo rašelinu. Irsko se tak stalo první zemí bez investic ve fosilních palivech."}, {n: "Iceland", j: "Island", b: "#bababa", t: "Bez uhelných elektráren"}, {n: "Italy", j: "Itálie", b: "#006837", t: "Konec uhelné energetiky do roku 2025.<br><br>V říjnu 2017 italská vláda zapracovala do národní energetické strategie ukončení uhelných provozů do roku 2025. Strategie nicméně není závazná, konkretní opatření země teprve musí přijmout."}, {n: "Kosovo", j: "Kosovo", b: "#a50026", t: "V jižní části bývalé Jugoslávie se připravují nové uhelné elektrárny o výkonu 6,6 GW. Z toho 1,7 GW elektráren má stavební povolení, dalších 4,9 GW buď dosud povolení nemá, nebo jim vypršelo a nebylo obnoveno. Všechny jsou nicméně součástí oficiálních plánů. Bosna a Hercegovina spolupracuje s Čínou na několika uhelných elektrárnách, financovaných půjčkami čínských bank. Průměrný věk uhelných elektráren v regionu je přes 40 let, v současnosti proto nesplňují normy EU na znečištění. Výjimku mají do roku 2028."}, {n: "Cyprus", j: "Kypr", b: "#bababa", t: "Bez uhelných elektráren"}, {n: "Lithuania", j: "Litva", b: "#bababa", t: "Bez uhelných elektráren"}, {n: "Latvia", j: "Lotyšsko", b: "#bababa", t: "Bez uhelných elektráren"}, {n: "Luxembourg", j: "Lucembursko", b: "#bababa", t: "Bez uhelných elektráren"}, {n: "Hungary", j: "Maďarsko", b: "#fdae61", t: "Maďarsku zbývá jediná hnědouhelná elektrárna (Matra, výkon 884 MW), která je dominantním producentem oxidu uhličitého v zemi. V listopadu 2018 na setkání, organizovaném Evropskou komisí, její provozovatel představil tři možné budoucí scénáře. Nejreálnější je podle něj nízkoemisní varianta, která by vedla k odstavení hnědouhelných bloků nejpozději v roce 2030. Náměstek ministra při stejné příležitosti potvrdil, že vláda podporuje provozovatele elektrárny a okolní region v tranzici k nízkoemisní energetice. Pokud se tento plán stane skutečností, Maďarsko bude v roce 2030 jednou z prvních východoevropských zemí, které se zbaví uhlí."}, {n: "Macedonia", j: "Makedonie", b: "#a50026", t: "V jižní části bývalé Jugoslávie se připravují nové uhelné elektrárny o výkonu 6,6 GW. Z toho 1,7 GW elektráren má stavební povolení, dalších 4,9 GW buď dosud povolení nemá, nebo jim vypršelo a nebylo obnoveno. Všechny jsou nicméně součástí oficiálních plánů. Bosna a Hercegovina spolupracuje s Čínou na několika uhelných elektrárnách, financovaných půjčkami čínských bank. Průměrný věk uhelných elektráren v regionu je přes 40 let, v současnosti proto nesplňují normy EU na znečištění. Výjimku mají do roku 2028."}, {n: "Malta", j: "Malta", b: "#bababa", t: "Bez uhelných elektráren"}, {n: "Germany", j: "Německo", b: "#006837", t: "Konec uhelné energetiky do roku 2038 s možností posunout termín na rok 2035.<br><br>S uhelnými elektrárnami o výkonu 48 GW je Německo suverénně největším evropským konzumentem uhlí. V červnu 2018 se poprvé sešla vládní uhelná komise s cílem stanovit datum zavření všech uhelných provozů a navrhnout opatření, která by pomohla splnit závazky ohledně snížení emisí oxidu uhličitého pro rok 2020, vyplývající z Pařížské dohody. Letos v únoru dospěla k rozhodnutí uzavřít elektrárny do roku 2038 s možností posunout datum o tři roky dříve, pokud vše půjde dobře. Už v první fázi – do roku 2022 – ale Německo uzavře uhelné elektrárny o výkonu 12,5 GW. V letech 2023, 2026, 2029 a 2032 bude komise hodnotit dosavadní vývoj a může přehodnotit další termíny. Vláda kancléřky Merkelové nyní přichází s konkrétními kroky, které mají vést k uzavření uhelných provozů. První spolková země bez uhlí má být Berlín: v říjnu 2017 zemská vláda prosadila zákon, který znamená konec uhlí do roku 2030.<br><br>Nevládní organizace a část veřejnosti nicméně upozorňují, že současný plán by znamenal opětovné porušení Pařížské dohody v roce 2030, a požadují dřívější termín odstavení uhelných zdrojů."}, {n: "Netherlands", j: "Nizozemsko", b: "#006837", t: "Konec uhelné energetiky do roku 2029.<br><br>V říjnu 2017 se nastupující nizozemská vláda v koaliční smlouvě dohodla na uzavření všech uhelných elektráren do konce roku 2029, o necelý rok později tento bod posvětila zákonem. V říjnu 2018 vláda prohrála soud s devíti stovkami občanů, sdruženými ve spolku Urgenda, kteří ji zažalovali za nečinnost ohledně klimatické změny. Soud rozhodl, že musí do roku 2020 snížit emise skleníkových plynů o čtvrtinu oproti roku 1990, jak vyplývá ze závazků Pařížské dohody. Dosud země snížila emise o 13 procent, takže bude muset v blízké době přijít s drastickými změnami. Některé uhelné elektrárny proto mohou skončit dříve, než vláda plánuje.<br><br>Dva z pěti uhelných provozů v zemi byly spuštěny teprve nedávno, v letech 2015 a 2016. Termín uzavření znamená, že by odsloužily méně než polovinu svojí životnosti."}, {n: "Norway", j: "Norsko", b: "#bababa", t: "Norsko nemá žádné uhelné provozy s výjimkou kogenerační elektrárny ve městě Longyearbyen na Špicberkách. Pro ni v současnosti Norové zvažují čisté alternativy."}, {n: "Poland", j: "Polsko", b: "#a50026", t: "Stárnoucí uhelné elektrárny nejsou schopny dostát zákonům ohledně znečištění vzduchu. Polsko přesto staví pět dalších provozů. Těžba uhlí se zase potýká s ekonomickými tlaky. Tranzici k čisté energetice mohou spustit klimatické cíle EU pro rok 2030 a požadavky energetických trhů."}, {n: "Portugal", j: "Portugalsko", b: "#006837", t: "Konec uhelné energetiky do roku 2030.<br><br>Portugalská elektrárna Sines je jedna z klimaticky nejškodlivějších v EU. V listopadu 2016 nicméně portugalský ministr životního prostředí oznámil, že země skončí s uhlím do roku 2030. V říjnu 2017 se záměr stal součástí strategie na uhlíkově neutrální Portugalsko do roku 2050."}, {n: "Austria", j: "Rakousko", b: "#006837", t: "Konec uhelné energetiky do roku 2025, uvažuje se i o roce 2020.<br><br>Společnosti provozující poslední dvě uhelné elektrárny je plánují zavřít v letech 2020, respektive 2025. U příležotosti připojení k Alianci post-uhelné energetiky (Powering Past Coal Alliance) rakouský ministr životního prostředí uvedl, že země skončí s uhlím nejpozději do roku 2025. V lednu 2018 ministryně životního prostředí Elisabeth Köstinger oznámila ještě dřívější datum, rok 2020. Energetická strategie, publikované krátce poté, nicméně s posunem na rok 2020 nepočítá. Vláda také nepodnikla žádné kroky k dosažení dřívějšího termínu."}, {n: "Romania", j: "Rumunsko", b: "#a50026", t: "Stárnoucí uhelné elektrárny nejsou schopny dostát zákonům ohledně znečištění vzduchu. Těžba uhlí se zase potýká s ekonomickými tlaky. Rumunská energetická strategie navrhuje pro roky 2030 až 2050 snížit roční výrobu energie z uhlí na 15 TWh, což je o pouze o 1 TWh méně než v roce 2018. Od roku 2013 se navíc plánuje ve spolupráci s čínským investorem stavba uhelné elektrárny v Rovinari, její význam zdůrazňuje také aktuální energetický plán."}, {n: "Greece", j: "Řecko", b: "#a50026", t: "Řecko provozuje stárnoucí uhelné elektrárny, které by měly být podle unijních zákonů o znečištění vzduchu odstaveny. Navzdory ekonomickým problémům – které připustil i ředitel státní energetické firmy – navrhuje vláda stavbu nových hnědouhelných elektráren, které mají být v provozu ještě po roce 2050. Regionu Západní Makedonie se věnuje platforma Evropské komise Uhelné oblasti v přeměně (Coal Regions in Transition)."}, {n: "Slovakia", j: "Slovensko", b: "#fdae61", t: "Slovensko provozuje poměrně omezený výkon uhelných elektráren. Mohlo by jít o jednu z prvních východoevropských zemí, kde dojde k tranzici k čisté energii. V prosinci 2017 ministr životního prostředí Sólymos oznámil, že jak uhelná energetika, tak těžba uhlí mají skončit do roku 2023. O rok později ministr hospodářství uvedl, že Slovensko přestane do roku 2023 vyplácet dotace na uhelné doly, které zásobují uhelnou elektrárnu Nováky. Regionu Horní Nitry se věnuje platforma Evropské komise Uhelné oblasti v přeměně (Coal Regions in Transition)."}, {n: "Slovenia", j: "Slovinsko", b: "#d73027", t: "Slovinsko v roce 2016 připojilo k elektrické síti uhelnou elektrárnu Sostanj 6. Stavbu extrémně drahé elektrárny doprovázela řada komplikací. V provozu má být do roku 2054."}, {n: "United Kingdom", j: "Spojené království", b: "#006837", t: "Konec uhelné energetiky do roku 2025.<br><br>Britové oznámili cíl opustit uhelnou energetiku ještě přes Pařížskou dohodou v roce 2015 a stali se tak první zemí na světě, která se rozhodla skončit s uhlím. Vláda záměr potvrdila v lednu 2018 a v současnosti připravuje nutná opatření, zvažuje například emisní limit na uhelné provozy, který by platil od října 2025. Část změn už mají Britové za sebou – v roce 2010 provozovali uhelné elektrárny o výkonu asi 30 GW, dnes je jejich výkon poloviční. Podíl elektřiny z uhlí se ve stejném období snížil ze 40 procent na 9 procent."}, {n: "Republic of Serbia", j: "Srbsko", b: "#a50026", t: "V jižní části bývalé Jugoslávie se připravují nové uhelné elektrárny o výkonu 6,6 GW. Z toho 1,7 GW elektráren má stavební povolení, dalších 4,9 GW buď dosud povolení nemá, nebo jim vypršelo a nebylo obnoveno. Všechny jsou nicméně součástí oficiálních plánů. Bosna a Hercegovina spolupracuje s Čínou na několika uhelných elektrárnách, financovaných půjčkami čínských bank. Průměrný věk uhelných elektráren v regionu je přes 40 let, v současnosti proto nesplňují normy EU na znečištění. Výjimku mají do roku 2028."}, {n: "Spain", j: "Španělsko", b: "#fdae61", t: "Španělsko vyváží velké množství elektřiny. Má také výrazný potenciál pro elektřinu z obnovitelných zdrojů, takže by mohlo odstavit svoje uhelné provozy bez ohrožení své energetické bezpečnosti. Část starých uhelných elektráren má být vyřazena do roku 2020, kdy přestanou splňovat normy EU ohledně znečištění vzduchu. Předchozí španělská vláda měla snahu udržet je v provozu; nová vláda a zejména ministryně životního prostředí Teresa Ribera naopak navrhuje uzavření všech uhelných elektráren do roku 2025. V listopadu 2018 připustil ministr energetiky José Domínguez Abascal, že nejméně 9 uhelných elektráren skončí v červnu 2020. Konec evropských dotací na těžbu černého uhlí zároveň vedl k tomu, že 25 z 26 uhelných dolů ukončilo těžbu v roce 2018."}, {n: "Sweden", j: "Švédsko", b: "#006837", t: "Konec uhelné energetiky do roku 2022.<br><br>Poslední uhelná elektrárna v zemi má skončit v roce 2022. Švédsko chce být jednou z prvních vyspělých zemí, která se obejde zcela bez uhlí."}, {n: "Switzerland", j: "Švýcarsko", b: "#bababa", t: "Bez uhelných elektráren"}, {n: "Turkey", j: "Turecko", b: "#a50026", t: "Turecko oficiálně oznámilo záměr zvýšit výkon svých uhelných elektráren do roku 2023 na 30 GW. Celkem plánuje 39 GW nových uhelných provozů; tím by se země stala celosvětově čtvrtým největším investorem do nových uhelných elektráren. Asi třetina z nich jsou projekty státních firem EÜAŞ a Turecké uhelné závody. EÜAŞ láká zahraniční firmy k investicím do hnědouhelné energetiky pomocí štědrých státních dotací, daňových úlev a garance výkupních cen. Běžnou praxí v zemi jsou modernizace, kterými se prodlužuje životnost nejstarších a nejšpinavějších elektráren v zemi."}];

$("#tooltip").html("<h2><span class='f32'><span class='flag de'></span></span> Německo</h2><p><em>je určené datum odstoupení od uhlí</em></p><p>Konec uhelné energetiky do roku 2038 s možností posunout termín na rok 2035.<br><br>S uhelnými elektrárnami o výkonu 48 GW je Německo suverénně největším evropským konzumentem uhlí. V červnu 2018 se poprvé sešla vládní uhelná komise s cílem stanovit datum zavření všech uhelných provozů a navrhnout opatření, která by pomohla splnit závazky ohledně snížení emisí oxidu uhličitého pro rok 2020, vyplývající z Pařížské dohody. Letos v únoru dospěla k rozhodnutí uzavřít elektrárny do roku 2038 s možností posunout datum o tři roky dříve, pokud vše půjde dobře. Už v první fázi – do roku 2022 – ale Německo uzavře uhelné elektrárny o výkonu 12,5 GW. V letech 2023, 2026, 2029 a 2032 bude komise hodnotit dosavadní vývoj a může přehodnotit další termíny. Vláda kancléřky Merkelové nyní přichází s konkrétními kroky, které mají vést k uzavření uhelných provozů. První spolková země bez uhlí má být Berlín: v říjnu 2017 zemská vláda prosadila zákon, který znamená konec uhlí do roku 2030.<br><br>Nevládní organizace a část veřejnosti nicméně upozorňují, že současný plán by znamenal opětovné porušení Pařížské dohody v roce 2030, a požadují dřívější termín odstavení uhelných zdrojů.<p>");
Highcharts.mapChart('mapa', {
  chart: {
    map: 'custom/europe'
  },
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  credits: {
    enabled: false
  },
  legend: {
    margin: 0
  },
  plotOptions: {
    map: {
      allAreas: true,
      joinBy: ['name', 'n'],
      color: '{point.b}'
    }
  },
  tooltip: {
    formatter: function formatter() {
      $("#tooltip").html("<h2><span class='f32'><span class='flag " + this.point.properties["hc-key"] + "'>" + "</span></span> " + this.point.j + "</h2><p><em>" + this.series.name + "</em></p>" + this.point.t + "<p>");
      return false;
    }
  },
  series: [{
    data: elektrarny.filter(function (elektrarna) {
      return elektrarna.b == "#a50026";
    }),
    name: "plánuje stavbu dalších hnědouhelných elektráren",
    color: "#a50026",
    allAreas: true
  }, {
    data: elektrarny.filter(function (elektrarna) {
      return elektrarna.b == "#006837";
    }),
    name: "je určené datum odstoupení od uhlí",
    color: "#006837",
    allAreas: false
  }, {
    data: elektrarny.filter(function (elektrarna) {
      return elektrarna.b == "#d73027";
    }),
    name: "není určené datum a nic se neděje",
    color: "#d73027",
    allAreas: false
  }, {
    data: elektrarny.filter(function (elektrarna) {
      return elektrarna.b == "#bababa";
    }),
    name: "žádné hnědouhelné el. tam nebyly a nejsou",
    color: "#bababa",
    allAreas: false
  }, {
    data: elektrarny.filter(function (elektrarna) {
      return elektrarna.b == "#fdae61";
    }),
    name: "je to ve hvězdách, ale něco se připravuje",
    color: "#fdae61",
    allAreas: false
  }]
});