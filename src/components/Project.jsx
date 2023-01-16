import SVG from "./SVG"

export default function Project({ project, index }) {
    return<>
        <div key={index} className={`max-w-[900px] flex flex-col lg:flex-row gap-0 p-6`}>

                    <div className='min-w-[380px] max-w-[600px] self-center m-4 w-full shadow-md bg-white rounded-xl h-[280px] relative'>
                        
                      <div className='absolute rounded-xl min-w-[380px] hover:z-0 z-10 w-[inherit] hover:opacity-0 opacity-50 h-[inherit] bg-slate-600'></div>

                      <img src={project.images[0]} className={`rounded-xl z-0 grayscale min-w-[380px]  hover:grayscale-0 hover:z-10 relative h-[inherit] w-[inherit] self-center object-cover object-top`}/>

                    </div>

                    <div className='flex-col gap-6 flex lg:w-1/2'>

                        <div className='flex justify-between'>
                            <h2 className='text-2xl font-thin self-center'>{project.title}</h2>
                            <a href={project.url} target={project.url ? '_blank' : ''} disabled={project.url} className={`bg-slate-800 ${project.url ? 'cursor-pointer' : 'cursor-not-allowed'} p-4 font-thin hover:font-bold transease rounded-lg`}>
                            <SVG icon={project.url ? 'go' : 'lock'} color={'white'}/>
                            </a>
                        </div>

                        <span className='text-md font-light'>{project.brief}</span>

                        <div className='flex gap-2 flex-wrap min-w-[380px]'>
                            { project.tags.map((tag, tagIndx) => {
                                return <span key={tagIndx} className='rounded-xl bg-slate-700 p-2 min-w-[120px] text-xs'>{tag}</span>
                            }) }
                        </div>

                  </div>
        </div>
    </>
}