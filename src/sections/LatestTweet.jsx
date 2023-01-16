import { useContext } from "react";
import { useQuery } from "react-query"
import ThemeContext from "../context/ThemeContext";
import pinkIcon from '../assets/pinkIcon.jpg';
import SVG from "../components/SVG";

export default function LatestTweet() {

        const { theme } = useContext(ThemeContext);

        const { data, status, error } = useQuery(
          '/latestTweet',
          async () => {
            const response = await fetch('http://localhost:2345/latestTweet')
            const data = await response.json()
            return data
          }
        )
      
        if (status === 'loading') {
          return <div>Loading...</div>
        }
      1
        if (status === 'error') {
          console.log('Something went wrong', error)
          return <div>An error occurred, please try again later</div>
        }

        return <div className={`min-h-[400px] bg-slate-600 pt-5 pb-5 md:pb-10 md:pt-10 rounded-lg self-center max-w-[1000px] w-10/12 flex flex-col gap-2 ${theme.text} ${theme.bg}`}>
        <div className='flex w-10/12 justify-center items-center flex-col gap-0 self-center'>
            <div className='flex justify-center items-center gap-4 w-full'>
              <SVG icon={'tweet'} color={'white'} more={'self-center'} />
              <h2 className={'text-center md:text-4xl text-3xl mb-2 logo font-bold tracking-tight'} children={`Latest Update`}/>
            </div>
            <span className="mb-2 uppercase tracking-widest text-xs font-light self-center text-center opacity-30">Fetched via Twitter Api</span>
        </div>

        <div className='twitter-quote max-w-[800px] md:gap-6 w-11/12 justify-center items-center flex flex-col md:flex-row-reverse md:text-2xl self-center'>
        <div className="flex w-full gap-6 justify-end">
            <div className="bg-gray-800 p-8 w-9/12 md:w-full self-center items-center md:min-h-[200px] flex flex-col justify-center rounded-2xl rounded-bl-none">
                <a href={`https://twitter.com/jocoscript/status/${data.id}`}>{data.text}</a>
            </div>
        </div>

          <div className='flex md:flex-col gap-4 self-start md:self-center leading-[0]'>
            <img src={pinkIcon} className={`md:max-w-[200px] border-[5px] self-end max-h-[100px] md:max-h-[200px] rounded-full`}/>
            <a target="_blank" href='https://twitter.com/jocoscript' className='self-center mt-4'>@jocoscript</a>
          </div>
        </div>

      </div>
}