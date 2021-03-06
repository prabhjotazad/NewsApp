import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
     articles = [
        {
        "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": null,
        "title": "Apple expected to launch new low-cost 5G iPhone - Reuters.com",
        "description": "Apple Inc <a href=\"https://www.reuters.com/companies/AAPL.O\" target=\"_blank\">(AAPL.O)</a> will likely announce a new low-cost version of its iPhone SE with 5G capabilities at its annual spring product launch event on Tuesday, analysts say.",
        "url": "https://www.reuters.com/technology/apple-expected-launch-new-low-cost-5g-iphone-2022-03-07/",
        "urlToImage": "https://www.reuters.com/resizer/Mu44fExSvIDWDLSTsDr_7q8hkR4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/C7ZAUZSE5NO5JMI5AJG25SZH4E.jpg",
        "publishedAt": "2022-03-07T11:02:00Z",
        "content": "NEW YORK, March 7 (Reuters) - Apple Inc (AAPL.O) will likely announce a new low-cost version of its iPhone SE with 5G capabilities at its annual spring product launch event on Tuesday, analysts say.\r… [+2848 chars]"
        },
        {
        "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": null,
        "title": "Taiwan February exports seen rising for 20th straight month - Reuters",
        "description": "Taiwan's exports likely rose for the 20th straight month in February but at a slower pace, a Reuters poll showed, boosted by sustained demand for chips and hi-tech gadgets despite a week-long Lunar New Year holiday.",
        "url": "https://www.reuters.com/markets/asia/taiwan-february-exports-seen-rising-20th-straight-month-2022-03-07/",
        "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=77",
        "publishedAt": "2022-03-07T03:16:00Z",
        "content": "TAIPEI, March 7 (Reuters) - Taiwan's exports likely rose for the 20th straight month in February but at a slower pace, a Reuters poll showed, boosted by sustained demand for chips and hi-tech gadgets… [+1189 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CNET"
        },
        "author": "Ian Sherr",
        "title": "Apple's Upcoming iPhone SE to Bring 5G Speeds for People 'Who Just Want an iPhone' - CNET",
        "description": "We're more dependent on our devices than ever. With costs rising, Apple's deal may start looking better.",
        "url": "https://www.cnet.com/tech/mobile/apples-upcoming-iphone-se-to-bring-5g-speeds-for-people-who-just-want-an-iphone/",
        "urlToImage": "https://www.cnet.com/a/img/7xAM_BWIZzRxbYpxY6VCwqoWmdw=/1200x630/2022/03/03/9b38d1ca-d96e-413a-80de-96f0b1b6c961/apple-iphone-6896.jpg",
        "publishedAt": "2022-03-07T13:00:03Z",
        "content": "Apple's iPhone is its most important product.\r\nJames Martin/CNET\r\nFrom its introduction in 2007, Apple's iPhone has been known as a premium device, with a price tag to match. But on Tuesday, Apple is… [+4036 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MacRumors"
        },
        "author": "Tim Hardwick",
        "title": "How to Watch the 'Peek Performance' Apple Event on Tuesday, March 8",
        "description": "Apple is planning to hold its first media event of 2022 on Tuesday, March 8, at 10:00 a.m. Pacific Time through a live stream. The event is expected to see the unveiling of a new iPhone SE, iPad Air, and at least one new Mac. We could also hear news related t…",
        "url": "https://www.macrumors.com/how-to/how-to-watch-peek-performance-apple-event-march-8/",
        "urlToImage": "https://images.macrumors.com/t/dRKm6sLVEw5sCzpRCdB4UfSJxgI=/2182x/article-new/2022/03/Peek-Performance-Feature.jpg",
        "publishedAt": "2022-03-07T09:57:59Z",
        "content": "Apple is planning to hold its first media event of 2022 on Tuesday, March 8, at 10:00 a.m. Pacific Time through a live stream. The event is expected to see the unveiling of a new iPhone SE, iPad Air,… [+3776 chars]"
        },
        {
        "source": {
        "id": "financial-post",
        "name": "Financial Post"
        },
        "author": "Danielle Kaye and Nivedita Balu, Reuters",
        "title": "Apple expected to launch new low-cost 5G iPhone - Financial Post",
        "description": "<ol><li>Apple expected to launch new low-cost 5G iPhone  Financial Post\r\n</li><li>iPhone SE 3 could miss out on MagSafe — will it matter?  Tom's Guide\r\n</li><li>iPhone SE 3 colour variants? Details leaked ahead of launch  HT Tech\r\n</li><li>Apple iPhone SE lau…",
        "url": "https://financialpost.com/pmn/business-pmn/apple-expected-to-launch-new-low-cost-5g-iphone",
        "urlToImage": null,
        "publishedAt": "2022-03-07T11:04:53Z",
        "content": "Article content\r\nNEW YORK Apple Inc will likely announce a new low-cost version of its iPhone SE with 5G capabilities at its annual spring product launch event on Tuesday, analysts say.\r\nThe iPhone m… [+2690 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hipertextual"
        },
        "author": "José María López",
        "title": "Así puedes jugar a tus juegos de Steam en tu móvil, tablet o TV",
        "description": "Steam revolucionó el sector de los videojuegos. Una tienda de juegos con descuentos y ofertas constantes. Una herramienta que organizaba y centralizaba la instalación, configuración y actualización de juegos en PC. Luego vendrían las Steam Machines, SteamOS o…",
        "url": "https://hipertextual.com/2022/03/remote-play-anywhere-jugar-steam",
        "urlToImage": "https://i0.wp.com/hipertextual.com/wp-content/uploads/2022/02/Steam-Remote-Play-Anywhere-Lonely-Mountains-Downhill.jpg?fit=2000%2C1333&ssl=1",
        "publishedAt": "2022-03-07T07:01:00Z",
        "content": "Steam revolucionó el sector de los videojuegos. Una tienda de juegos con descuentos y ofertas constantes. Una herramienta que organizaba y centralizaba la instalación, configuración y actualización d… [+4048 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hipertextual"
        },
        "author": "Rubén Chicharro",
        "title": "Nuevos iPhone SE, iPad Air, Mac con M2 y más: lo que depara el evento de Apple",
        "description": "El primer evento de Apple para este 2022, llamado 'Peek Performance', dará comienzo en pocas horas, y se espera que traiga consigo nuevos dispositivos. La lista de posibles lanzamientos, de hecho, no es precisamente corta: iPhone SE, iPad Air, Mac con procesa…",
        "url": "https://hipertextual.com/2022/03/nuevos-iphone-se-ipad-air-mac-m2-evento-de-apple",
        "urlToImage": "https://hipertextual.com/wp-content/uploads/2022/03/apple.jpg",
        "publishedAt": "2022-03-07T13:25:05Z",
        "content": "El primer evento de Apple para este 2022, llamado 'Peek Performance', dará comienzo en pocas horas, y se espera que traiga consigo nuevos dispositivos. La lista de posibles lanzamientos, de hecho, no… [+7631 chars]"
        },
        {
        "source": {
        "id": "the-next-web",
        "name": "The Next Web"
        },
        "author": "Ioanna Lykiardopoulou",
        "title": "The best apps for finding your nearest EV charging stations",
        "description": "Whether you’re using your sweet EV to commute, drive around town, or plan a road trip, there’s probably something always on your mind: keeping your battery juiced up. Fortunately, there’s a whole range of apps that can help you locate charging stations — and …",
        "url": "https://thenextweb.com/news/the-best-apps-for-finding-your-nearest-ev-charging-stations",
        "urlToImage": "https://img-cdn.tnwcdn.com/image/shift?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2022%2F03%2FUntitled-design-59-6.jpg&signature=ede528c7e4f0a84d8f1395ddad0bd0e2",
        "publishedAt": "2022-03-07T13:47:35Z",
        "content": "Whether youre using your sweet EV to commute, drive around town, or plan a road trip, theres probably something always on your mind: keeping your battery juiced up.\r\nFortunately, theres a whole range… [+3248 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "HuffPost"
        },
        "author": "Nick Visser",
        "title": "Netflix Suspends Service In Russia Over Ukraine Invasion",
        "description": "The move comes just after the company said it would immediately “pause” its Russian television and film productions.",
        "url": "https://www.huffpost.com/entry/netflix-service-russia-ukraine_n_622548c3e4b012a2628c710a",
        "urlToImage": "https://img.huffingtonpost.com/asset/622557562300005c32136c9f.jpeg?cache=IMThm5Qe9r&ops=1778_1000",
        "publishedAt": "2022-03-07T02:14:19Z",
        "content": "Netflix said it would suspend its service in Russia on Sunday, citing the ongoing invasion in Ukraine.\r\nNetflix has suspended service in Russia just days after it said it would pause all projects and… [+1375 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xataka.com"
        },
        "author": "Javier Pastor",
        "title": "Qué podemos esperar del evento Apple 'Peek Performance' que se celebra el 8 de marzo",
        "description": "Apple celebrará mañana su primer evento del año, y la habitual expectación que rodea a la empresa de Cupertino ha ido generando más y más indicios sobre lo que es posible que veamos en dicho evento.\n<!-- BREAK 1 -->\nHay como siempre quinielas para todos los g…",
        "url": "https://www.xataka.com/moviles/que-podemos-esperar-evento-apple-peek-performance-que-se-celebra-8-marzo",
        "urlToImage": "https://i.blogs.es/0d0160/captura-de-pantalla-2022-03-07-a-las-9.33.54/840_560.jpeg",
        "publishedAt": "2022-03-07T08:36:06Z",
        "content": "Apple celebrará mañana su primer evento del año, y la habitual expectación que rodea a la empresa de Cupertino ha ido generando más y más indicios sobre lo que es posible que veamos en dicho evento.\r… [+3918 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xataka.com"
        },
        "author": "Jose García",
        "title": "No estás solo, casi todos los podcast son un desastre a la hora de ordenar y categorizar sus episodios",
        "description": "Una de las funciones más útiles que tiene YouTube es la posibilidad de dividir un video en \"secciones\": de X a Y minuto, tal parte, de Y a Z minuto, esta otra parte. Eso permite al usuario ver la parte que realmente le interesa y ayuda, de alguna forma, a ord…",
        "url": "https://www.xataka.com/servicios/no-estas-solo-casi-todos-podcast-desastre-a-hora-ordenar-categorizar-sus-episodios",
        "urlToImage": "https://i.blogs.es/087126/convertkit-waxdxym2xi4-unsplash/840_560.jpeg",
        "publishedAt": "2022-03-07T13:00:41Z",
        "content": "Una de las funciones más útiles que tiene YouTube es la posibilidad de dividir un video en \"secciones\": de X a Y minuto, tal parte, de Y a Z minuto, esta otra parte. Eso permite al usuario ver la par… [+2326 chars]"
        },
        {
        "source": {
        "id": "ign",
        "name": "IGN"
        },
        "author": "Ryan Dinsdale",
        "title": "Nintendo Switch Online’s Mobile App Finally Lets You See Which Friends Are Online",
        "description": "The Nintendo Switch Online mobile app has finally been updated to include some fairly basic features.",
        "url": "https://www.ign.com/articles/nintendo-switch-online-mobile-app-finally-lets-you-see-which-friends-are-online",
        "urlToImage": "https://assets-prd.ignimgs.com/2022/03/07/nintendoonlinefirstthumb-1537346794885-1646652270490.jpg?width=1280",
        "publishedAt": "2022-03-07T11:24:36Z",
        "content": "The Nintendo Switch Online mobile app has finally been updated to include some fairly basic features.\r\nIn the new 2.0.0 update, the app can now be used to see which friends are online, change your on… [+1118 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Digital Trends"
        },
        "author": "Prakhar Khanna",
        "title": "What we’d like to see from the iPhone SE 2022",
        "description": "Here's a wish list for the iPhone SE (2022), which Apple is expected to announce at a March 8 event.",
        "url": "https://www.digitaltrends.com/mobile/iphone-se-2020-what-we-would-like-to-see/",
        "urlToImage": "https://icdn.digitaltrends.com/image/digitaltrends/wyze-floor-lamp-review-8-of-14.jpg",
        "publishedAt": "2022-03-07T14:00:09Z",
        "content": "The iPhone SE first appeared on the market in 2016, but didn’t get a second-gen upgrade up until 2020 — when it received upgraded internals in an iPhone 8 body. It is now rumored that a new iPhone SE… [+5136 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Digital Trends"
        },
        "author": "Trevor Mogg",
        "title": "Netflix suspends its streaming service in Russia",
        "description": "Netflix has suspended its streaming service in Russia following the country's invasion of Ukraine toward the end of last month.",
        "url": "https://www.digitaltrends.com/movies/netflix-suspends-its-service-in-russia/",
        "urlToImage": "https://icdn.digitaltrends.com/image/digitaltrends/streaming-services-during-coronavirus-pandemic.jpg",
        "publishedAt": "2022-03-07T01:40:01Z",
        "content": "Netflix has become the latest tech firm to suspend operations in Russia following the countrys invasion of Ukraine.\r\nGiven the circumstances on the ground, we have decided to suspend our service in R… [+1955 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Blogger.com"
        },
        "author": "Calculated Risk",
        "title": "Six High Frequency Indicators for the Economy",
        "description": "Netflix has suspended its streaming service in Russia following the country's invasion of Ukrain",
        "url": "https://www.blogger.com/comment.g?blogID=10004977&postID=2052135817311119209&bpli=1",
        "urlToImage": null,
        "publishedAt": "2022-03-07T13:57:00Z",
        "content": "These indicators are mostly for travel and entertainment.    It is interesting to watch these sectors recover as the pandemic subsides.----- Airlines: Transportation Security Administration -----The … [+3623 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Dusan Zivadinovic",
        "title": "Objekt-Tracker: Apples AirTags wegen Missbrauchs weiterhin im Kreuzfeuer",
        "description": "Apples Objekttracker AirTag soll helfen Gegenstände per iPhone und Funkortung wiederzufinden. Aber er lässt sich wie andere Tracker leicht missbrauchen.",
        "url": "https://www.heise.de/news/Objekt-Tracker-Apples-AirTags-wegen-Missbrauchs-weiterhin-im-Kreuzfeuer-6500687.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/3/2/6/9/9/7/appleairtags-30bdfa4cff03a708.jpeg",
        "publishedAt": "2022-03-07T06:00:00Z",
        "content": "Auf das Missbrauchspotenzial haben viele Medien schon kurz nach dem Verkaufsstart im Juni vergangenen Jahres hingewiesen. Der Konzern rührte sich zunächst nicht und in wenigen Monaten wurden etliche … [+2797 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Andreas Hitzig",
        "title": "heise+ | Anleitung: Raspberry Pi als Streaming-Server im eigenen Netzwerk dank Mopidy",
        "description": "Um einen eigenen Streaming-Server zu installieren, benötigt man keine aufwendige Hardware – ein preiswerter Raspberry Pi mit der richtigen Software tut's auch.",
        "url": "https://www.heise.de/ratgeber/Anleitung-Raspberry-Pi-als-Streaming-Server-im-eigenen-Netzwerk-dank-Mopidy-6537489.html",
        "urlToImage": "https://heise.cloudimg.io/cdn/n/n/_www-heise-de_/imgs/18/3/3/5/7/1/3/9/ct0122sw_softwa_thorsten_huebner_w_117757_spo_a_digital_1-397ab683cb7a3d89-b3da62687c871104.gif",
        "publishedAt": "2022-03-07T10:30:00Z",
        "content": "Inhaltsverzeichnis\r\nDer Raspberry Pi ist ein kleiner Alleskönner. Auch beim Streaming von Video und Audio leistet er gute Dienste, sofern die Hardware-Leistung stimmt. Eine passende Plattform ist dan… [+1559 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "9to5Mac"
        },
        "author": "José Adorno",
        "title": "Time to Walk episode with Malala Yousafzai now available for Apple Fitness+ subscribers",
        "description": "In celebration of Women’s History Month, Apple just released a new Time to Walk episode with Nobel Peace Prize winner Malala Yousafzai. She shares her story in a 30-minute episode available on the Apple Watch Workout app.\n more…\nThe post Time to Walk episode …",
        "url": "https://9to5mac.com/2022/03/07/time-to-walk-malala-yousafzai-apple-fitness-plus/",
        "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/03/malala-time-to-walk-9to5mac.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2022-03-07T13:20:30Z",
        "content": "In celebration of Women’s History Month, Apple just released a new Time to Walk episode with Nobel Peace Prize winner Malala Yousafzai. She shares her story in a 30-minute episode available on the Ap… [+2124 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "9to5Mac"
        },
        "author": "José Adorno",
        "title": "iPhone SE 3 expected to target first-time buyers, could account for 10% of iPhone sales",
        "description": "Apple is expected to announce the iPhone SE 3 at tomorrow’s “Peek Performance” event. With 5G capabilities, the powerful A15 Bionic chip, and camera improvements, analysts believe this low-cost iPhone is aimed at first buyers and could push shipments globally…",
        "url": "https://9to5mac.com/2022/03/07/iphone-se-3-first-time-buyers-global-sales-analysis/",
        "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/03/iphone-se3-fi.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2022-03-07T14:19:24Z",
        "content": "Apple is expected to announce the iPhone SE 3 at tomorrow’s “Peek Performance” event. With 5G capabilities, the powerful A15 Bionic chip, and camera improvements, analysts believe this low-cost iPhon… [+2012 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "9to5Mac"
        },
        "author": "José Adorno",
        "title": "Survey: 40% of iPhone users plan to get iPhone SE 3, most upgrading from iPhone 11",
        "description": "Apple will hold tomorrow its first event of the year. While there is some controversy about what Macs the company will unveil, it’s believed that a new iPhone SE 3 and the fifth-generation iPad Air will also be introduced. That said, a survey shows 40% of iPh…",
        "url": "https://9to5mac.com/2022/03/07/survey-40-of-iphone-users-plan-to-get-iphone-se-3-most-upgrading-from-iphone-11/",
        "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/01/iPhone-SE-2022.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2022-03-07T11:48:50Z",
        "content": "Apple will hold tomorrow its first event of the year. While there is some controversy about what Macs the company will unveil, it’s believed that a new iPhone SE 3 and the fifth-generation iPad Air w… [+2030 chars]"
        }
        ]
    constructor(){
        super();
        //console.log('Hello I am constructor');
        this.state={artcles: this.articles}
        
    }

    async componentDidMount(){
        let apiUrl='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=115fa23e6a5f48ddad77c6dab5f73f09';
        let data = await fetch(apiUrl);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({artcles : parseData.articles})
    }

     handlePrevClick = () => {

        console.log('previous');
     }
     handleNextClick = () => {
         console.log('Next');
    }
  render() {
    return (
      <>
      <div className='container my-5'>
          
        <div className='row'>
        {this.state.artcles.map((element) => {
            return <div className='col-md-4 my-2' key={element.url}>
                <NewsItem title={element.title?element.title.slice(0, 50)+'...':''} btnReadMore='Read More' btnUrl={element.url} desc={element.description?element.description.slice(0, 50)+'...':''} imageUrl={element.urlToImage} />
            </div>
            })}
        </div>
        <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-secondary" onClick={this.handlePrevClick}>Previous</button>
        <button type="button" className="btn btn-secondary" onClick={this.handleNextClick}>Next</button>
        </div>
      </div>  
      </>

    )
  }
}
