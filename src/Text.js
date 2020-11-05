import {useEffect} from 'react'
function Text(props) {
    useEffect(() => {
        console.log('text komponetnt render edildi')
    }, [])
  return <div>{props.name}</div>;
}

export default Text;
