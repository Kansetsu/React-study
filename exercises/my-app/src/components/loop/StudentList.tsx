import students from "../../data/students"

export default function Students(props: any) {
    const liStudent = students.map((students) => {
        return (
            <li key={students.id}>
                {students.id}) {students.name} - Nota: {students.grade}
            </li>
        )
    })

    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {liStudent}
            </ul>
        </div>
    )
}