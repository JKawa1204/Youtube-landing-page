import { Videocard } from "./Videocard"

const VIDEOS =[{
     title:"P. p. Bhaktiswamiji labh 07/04/2024",
    image:'pic1.png',
    thumb:'thumb1.png',
    channel:"HariPrabodhammumbai",
    time:'2 days ago',
    views:'36K views'
},
{
    title:"P. p. Bhaktiswamiji labh mumbai 14/04/2024",
   image:'pic1.png',
   thumb:'thumb1.png',
   channel:"HariPrabodhammumbai",
   time:'2 days ago',
   views:'36K views'
},
{
    title:"P. p. Bhaktiswamiji labh mumbai 21/04/2024",
   image:'pic1.png',
   thumb:'thumb1.png',
   channel:"HariPrabodhammumbai",
   time:'2 days ago',
   views:'36K views'
},
{
    title:"P. p. Bhaktiswamiji labh mumbai 21/04/2024",
   image:'pic1.png',
   thumb:'thumb1.png',
   channel:"HariPrabodhammumbai",
   time:'2 days ago',
   views:'36K views'
},
{
    title:"P. p. Bhaktiswamiji labh mumbai 21/04/2024",
   image:'pic1.png',
   thumb:'thumb1.png',
   channel:"HariPrabodhammumbai",
   time:'2 days ago',
   views:'36K views'
},
{
    title:"P. p. Bhaktiswamiji labh mumbai 21/04/2024",
   image:'pic1.png',
   thumb:'thumb1.png',
   channel:"HariPrabodhammumbai",
   time:'2 days ago',
   views:'36K views'
},
{
    title:"P. p. Bhaktiswamiji labh mumbai 21/04/2024",
   image:'pic1.png',
   thumb:'thumb1.png',
   channel:"HariPrabodhammumbai",
   time:'2 days ago',
   views:'36K views'
},
{
    title:"P. p. Bhaktiswamiji labh mumbai 21/04/2024",
   image:'pic1.png',
   thumb:'thumb1.png',
   channel:"HariPrabodhammumbai",
   time:'2 days ago',
   views:'36K views'
},
{
    title:"P. p. Bhaktiswamiji labh mumbai 21/04/2024",
   image:'pic1.png',
   thumb:'thumb1.png',
   channel:"HariPrabodhammumbai",
   time:'2 days ago',
   views:'36K views'
},
{
    title:"P. p. Bhaktiswamiji labh mumbai 21/04/2024",
   image:'pic1.png',
   thumb:'thumb1.png',
   channel:"HariPrabodhammumbai",
   time:'2 days ago',
   views:'36K views'
},
{
    title:"P. p. Bhaktiswamiji labh mumbai 21/04/2024",
   image:'pic1.png',
   thumb:'thumb1.png',
   channel:"HariPrabodhammumbai",
   time:'2 days ago',
   views:'36K views'
},
{
    title:"P. p. Bhaktiswamiji labh mumbai 21/04/2024",
   image:'pic1.png',
   thumb:'thumb1.png',
   channel:"HariPrabodhammumbai",
   time:'2 days ago',
   views:'36K views'
},
{
    title:"P. p. Bhaktiswamiji labh mumbai 21/04/2024",
   image:'pic1.png',
   thumb:'thumb1.png',
   channel:"HariPrabodhammumbai",
   time:'2 days ago',
   views:'36K views'
},
{
    title:"P. p. Bhaktiswamiji labh mumbai 21/04/2024",
   image:'pic1.png',
   thumb:'thumb1.png',
   channel:"HariPrabodhammumbai",
   time:'2 days ago',
   views:'36K views'
},
{
    title:"P. p. Bhaktiswamiji labh mumbai 21/04/2024",
   image:'pic1.png',
   thumb:'thumb1.png',
   channel:"HariPrabodhammumbai",
   time:'2 days ago',
   views:'36K views'
}]

export const Videogrid = ()=>{
    return <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4">
        {VIDEOS.map(video => <div>
            <Videocard title={video.title}
       image={video.image}
       thumb={video.thumb}
       channel={video.channel}
       time={video.time}
       views={video.views}
        />
            
            
            </div>)}

    </div>
}
