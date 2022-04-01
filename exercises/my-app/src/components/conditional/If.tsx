export default function Conditional(props: any) {
    if (props.test) {
        return props.children
    } else {
        return false
    }
}