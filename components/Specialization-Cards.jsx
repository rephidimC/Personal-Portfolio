import Image from "next/image";

function SpecialCard(props) {
  return (
    <div className="flex flex-col">
      <div className="object-cover w-1/2 m-auto rounded-2xl motion-safe:hover:scale-110">
        <Image src={props.image} alt={props.alt} width={300} height={244} />
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold tracking-wider">{props.title}</h1>
        <p className="tracking-normal font-thin text-sm">{props.note}</p>
        <div className="flex flex-row justify-evenly">{props.children}</div>
      </div>
      {/* each div is going to house an image, a title for the project, short note on it and tech stack used. */}
    </div>
  );
}

export default SpecialCard;
