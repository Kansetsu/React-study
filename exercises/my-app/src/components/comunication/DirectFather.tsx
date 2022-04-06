import DirectChild from './DirectChild'

export default function Father(props:any) {
    return (
        <div>
            <DirectChild name='Junior' age={2} bool={true} /> 
            <DirectChild name='Gabriel' age={20} bool={false} /> 
        </div>
    )
}