type TechProps = {
  data: string[]
}

const Technologies = ({ data }: TechProps) => {
  return ( 
    <ul className="flex gap-2 flex-wrap">
      {data.map( (tech, index) => 
        <li key={index} className="rounded-lg bg-yellow-400/10 text-yellow-500 px-3">{tech}</li>
      )}
    </ul>
   );
}
 
export default Technologies;