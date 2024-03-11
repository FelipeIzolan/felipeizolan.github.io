type ProjectProps = {
  url: string,
  name: string,
  description: string,
  stack: string[]
}


const Project = (props: ProjectProps) => {
  return (
  <p onClick={() => open(props.url, '_blank')} class='hover:scale-105 cursor-pointer mt-2 border-2 border-dotted text-left leading-3 pb-4'>
    <span class='text-blue ml-2'>name</span>: {props.name}<br/>
    <span class='text-blue ml-2'>description</span>: {props.description}<br/>
    <span class='text-blue ml-2'>stack</span>: {props.stack.join(', ')}<br/>
  </p>
  );
}

export default Project
