import {useRef , useLayoutEffect} from 'react'
import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {AiFillLinkedin} from "react-icons/ai"
import {BsGithub} from "react-icons/bs"
import {BiLogoGmail} from "react-icons/bi"
import { gsap } from 'gsap'
export default function ContactMe() {
  const root = useRef<any>(null)
useLayoutEffect(() => {


  const ctx = gsap.context(() => {
    gsap.from(root.current, {
      x: 1000 , 
      scrollTrigger :{
        trigger:root.current, 
      }
    })

  })
  return () => ctx.revert()
}, [])

  return (
    <div ref={root} className='  mb-20 font-sans card shadow-sm shadow-primary-content m-1 mt-4 p-2 capitalize'>
      <h1 id='Contact' className='card-title text-primary-content underline underline-offset-4 '>Contact me : </h1>
      <main className='flex gap-4 flex-wrap  justify-around mt-4'>
        <div className='card p-1 '>
          
          <a href='' className=' shadow-sm shadow-primary-content  card-title text-primary-content   btn-ghost p-2 rounded-lg'>
            facebook <BsFacebook size={25} />
          </a>
        </div>
        <div className='card p-1 btn-ghost shadow-sm shadow-primary-content items-center flex flex-row '>
          <h1 className=' card-title   text-primary-content  p-2 rounded-lg'>
            instagram 
          </h1>
            <BsInstagram className="inline-block" size={25} />
        </div>
        <div className='card p-1  w-32'>
          <h1 className='card-title shadow-sm shadow-primary-content  text-primary-content   btn-ghost p-2 rounded-lg'>
            gmail <BiLogoGmail/>
          </h1>
        </div>
        <div className='card p-1  w-32 '>
          <h1 className='card-title shadow-sm shadow-primary-content   text-primary-content  btn-ghost p-2 rounded-lg'>
            linkdin <AiFillLinkedin size={25} />
          </h1>
        </div>
        <div className='card p-1 w-32 '>
          <h1 className='card-title shadow-sm shadow-primary-content   text-primary-content btn-ghost p-2 rounded-lg'>
            github <BsGithub/>
          </h1>
        </div>
      </main>


Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus illo eligendi expedita molestiae autem doloremque porro harum? Sint enim, fugiat nulla earum quam reprehenderit ullam, quibusdam a ipsa fuga hic?
Reiciendis quos cum facere aspernatur itaque ipsum eligendi nihil unde ullam natus deserunt, impedit aut quis obcaecati! Debitis officia distinctio veritatis, esse ipsum ipsa, eos illum, iste fugit sunt animi.
Quidem est minima maxime provident laborum explicabo eius necessitatibus porro corporis quibusdam natus, pariatur laudantium molestiae! Rerum, dolore. Doloribus itaque eligendi fugit illo eos unde quasi, voluptatibus dolorem laboriosam mollitia.
Quos voluptatum, dolorum excepturi quibusdam officiis aspernatur cum vitae blanditiis accusantium? Totam sunt obcaecati ipsam culpa, adipisci dolore laborum nemo nesciunt, iusto laboriosam delectus cum laudantium quo quam eius neque?
Ipsum quos maxime iste sed deserunt, hic enim dicta aliquid minima rem ratione libero atque ullam voluptas dolorum maiores. Reprehenderit nam dolorum rem ullam delectus, in soluta officia consequuntur ex!
Consequatur optio beatae voluptas? Illum nulla sequi ducimus asperiores natus accusamus quibusdam porro esse exercitationem, soluta amet pariatur nesciunt laudantium, similique id animi quis hic neque. Amet porro ullam officia?
Eum explicabo corporis, officia sapiente dolores unde eius, dolore vitae aspernatur labore alias molestias ab adipisci incidunt aperiam ipsam quas quibusdam! Ex totam eligendi fuga dolor excepturi illum, sapiente ab!
Corrupti tempore rerum assumenda autem iure. Quaerat odio labore necessitatibus, obcaecati blanditiis incidunt sit ullam quae dolore molestiae illum maxime natus nemo facere quam facilis officia laborum sunt? Eveniet, nostrum!
Alias deserunt laboriosam quibusdam odio quod ex? Eos nemo dignissimos qui nulla laudantium aspernatur ea, possimus error cum quas tenetur praesentium, at, dicta saepe recusandae quia? Placeat velit eaque nihil!
Magni sapiente harum dolore alias autem cum recusandae provident accusantium, corporis quis doloribus, impedit obcaecati perspiciatis sint. Quibusdam nihil blanditiis aperiam eveniet sed reprehenderit assumenda architecto ex similique, modi error.
Aut cumque distinctio voluptates mollitia architecto atque? Id ipsa ex dolores repellendus dignissimos amet? Fuga, dolorem libero? Maiores commodi odit iure vitae velit ex, deleniti exercitationem, voluptatum a earum eos?
Ea ipsa voluptas soluta cumque, corporis aliquam tempora ullam illum, molestiae ducimus quas mollitia dolorum impedit omnis vel itaque facere distinctio expedita aut ipsam, modi officiis. Quia qui eius est!
Ex molestiae in optio similique tempore! Expedita consectetur nostrum quidem accusamus dolorem reprehenderit maxime quibusdam ut illum explicabo cupiditate adipisci nobis, asperiores quae doloremque laboriosam tempore praesentium repellendus nemo earum?
Laudantium natus maiores blanditiis assumenda! Hic quibusdam illum natus doloremque placeat incidunt accusamus velit aliquid, molestias excepturi voluptate dolorum libero fugit dolore facere qui id illo cupiditate ad vel perferendis.
Illum, nihil minus. Nobis, commodi sequi excepturi praesentium debitis iste repudiandae quasi ipsa minima ipsam, incidunt assumenda est quibusdam esse! Illum dicta vel corporis dolore provident sint officiis velit molestias?
Similique fugit cumque vero consequatur iure quo voluptate esse, atque numquam vel non, aut, blanditiis alias! Perferendis, possimus nemo placeat consequuntur porro officiis id voluptates magni, eaque nisi incidunt eos!
Aliquid, quod vitae similique architecto minima deleniti, numquam exercitationem porro eos laboriosam earum aut ipsam praesentium voluptas blanditiis magnam ullam vel mollitia necessitatibus provident iusto eius recusandae! Ut, asperiores ipsa.
Inventore natus, quia et voluptatibus provident incidunt deleniti dolore fugiat soluta veniam magni explicabo omnis, ipsum iusto laborum vero quasi earum, cupiditate dignissimos eius temporibus obcaecati rerum. Reiciendis, velit neque?
Recusandae quibusdam veritatis iste, consequuntur inventore voluptatibus sequi eveniet quidem corporis itaque deleniti accusantium dolor aliquid soluta! Autem suscipit rerum libero, obcaecati possimus quod error, ratione itaque pariatur vero deserunt.
Exercitationem debitis facere placeat quibusdam animi recusandae quis suscipit iusto error fugit eligendi autem tempore voluptates odio consequatur, in iste hic quae dolore, deserunt, sed perferendis molestiae! Reiciendis, et quisquam?
Eius excepturi, sapiente dignissimos ipsum expedita at soluta rem ad beatae dolore ex minima, maiores qui et porro eligendi accusantium assumenda obcaecati inventore eaque quidem blanditiis omnis nihil ea? Officiis.
Omnis autem eos repellendus laudantium quibusdam quas, a natus nobis quod vero ipsam expedita, quaerat deserunt rem possimus iusto. Eius, consequuntur dolor vel quam libero sunt quos dignissimos natus enim!
Repellat ducimus amet ab rerum sint voluptatem, maxime, et recusandae sed, iste enim. Molestiae explicabo dolorem repudiandae necessitatibus labore esse voluptate! Voluptas ex asperiores ullam praesentium porro vero molestiae nulla.
Porro dolor at cupiditate excepturi deserunt magni facere eum veniam! Quod facere, optio quidem deserunt accusamus, perferendis nam doloremque temporibus qui odio, minus unde fuga! Laborum nulla veritatis unde omnis!
Suscipit dignissimos non porro reiciendis voluptate ea magni, amet alias necessitatibus esse rerum natus autem sunt vero quasi distinctio dicta culpa ut minus id excepturi eius commodi nisi. Libero, ipsa.
Sequi beatae minus veniam natus reiciendis consequuntur illum dolore consequatur nulla cupiditate eius, vitae sed? Perferendis explicabo ratione aspernatur totam molestias, maxime ex, magni aliquid sunt impedit quidem inventore assumenda?
Dolor voluptatum quasi voluptate ipsa aliquam optio, rem tempora expedita inventore non numquam totam architecto maiores atque qui eveniet veritatis, itaque saepe odio dolorum delectus culpa deserunt repellendus cum. Praesentium?
Exercitationem error tenetur mollitia inventore doloremque debitis reprehenderit corrupti voluptatem nobis dignissimos recusandae deleniti, iste numquam repellat. Odit, alias nihil quia ipsa velit magni molestiae omnis facilis sapiente expedita odio?
Qui, ex eveniet? Explicabo fugit dolorum assumenda qui quidem quo molestiae delectus ipsam itaque facilis ad iste voluptatibus iure, illum recusandae, id aliquam earum obcaecati vitae? Assumenda sunt delectus labore!
Distinctio saepe ullam beatae dicta dolor harum error labore facere nisi! Modi velit corporis repellat dignissimos sequi eaque? Dolores aliquid, et nam ex neque magnam quis debitis veniam a illo!
Assumenda nesciunt suscipit, perferendis eligendi blanditiis debitis id delectus et autem vero quis aut, magnam possimus facere. Veniam adipisci ipsam, dolor neque explicabo voluptates sint beatae a, libero non placeat.
Dolorem minus porro iusto iste adipisci recusandae magnam rem doloremque, provident, voluptates, nihil illo a libero quaerat quis! Ea voluptates ratione qui quas quam doloribus voluptate accusantium fugit aspernatur consequuntur.
Dolorem quis ipsa harum assumenda tempore repudiandae tempora dolorum iusto eum. Fugit laborum, cumque sed quaerat, facilis, sequi animi dolores expedita repellat modi quisquam alias asperiores numquam optio dolore perferendis!
Cumque tempora, deleniti doloribus velit debitis iusto aliquid vel molestiae, placeat, ipsam laborum sequi tempore quisquam maiores. Labore hic, quaerat quisquam exercitationem inventore, quod, earum doloremque illo quas illum deserunt!
Iste eligendi illo, autem minima facilis corporis est ipsam a fugit? Doloremque natus pariatur laborum velit architecto molestiae commodi autem, eligendi animi in totam consequatur eius eaque facere repudiandae laboriosam.
Ex eum, magnam ipsum dignissimos eius voluptatem neque deserunt voluptatum vero cum quia quae excepturi unde commodi velit error, et distinctio tempore illo laborum laudantium repellendus adipisci explicabo. Facilis, ratione?
Libero cumque minima exercitationem necessitatibus quo, repellat maxime iure deserunt ea nostrum ullam earum in, voluptates nisi delectus beatae iusto assumenda tenetur odit enim. Ex nulla earum labore animi sed?
A placeat numquam consectetur quo alias voluptas, quaerat at reprehenderit iste, consequuntur ut? Nihil perferendis repellat sed, dolore cum nesciunt, aliquam in maiores, sapiente saepe veritatis expedita consequatur asperiores. Dignissimos.
Temporibus corrupti et hic. Hic ullam aliquam dolor voluptate perferendis ipsa iure deserunt eum quas ad. Dolores et sapiente explicabo. Qui beatae quisquam voluptate dolore aliquam, esse aliquid doloremque atque?
Perferendis illum, aspernatur exercitationem ipsa sapiente quisquam officia amet id adipisci placeat, beatae culpa, deserunt quibusdam sunt asperiores? Ratione, voluptatibus eaque iure libero ullam aliquam similique aliquid veritatis autem non.
    </div>
  )
}
