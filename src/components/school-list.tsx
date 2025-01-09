import React, { useEffect, useState } from 'react'
import { SchoolData } from '../types/school-data'
import { SchoolItem } from './school-item'

const fetchData = async (): Promise<SchoolData[]> => {
    const response = await fetch('/data/schools.json')
    const json = await response.json()
    return json
}

export const useSchoolData = () => {
    const [schools, setSchools] = useState<SchoolData[]>([])
    const [sortColumn, setSortColumn] = useState('name')
    const [ascending, setAscending] = useState(true)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData().then((data) => {
            setSchools(data)
            setLoading(false)
        })
    }, [])

    schools.sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) {
            return ascending ? -1 : 1
        } else if (a[sortColumn] > b[sortColumn]) {
            return ascending ? 1 : -1
        }
        return 0
    })

    return { schools, setSortColumn, setAscending, loading }
}

export const SchoolList = () => {
    const { schools, setSortColumn, setAscending, ascending } = useSchoolData()

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th
                        onClick={() => {
                            setSortColumn('average_student_gpa')
                            setAscending(!ascending)
                        }}>Avg GPA {ascending? '▲' : '▼'}</th>
                </tr>
            </thead>
            <tbody>
                {schools.map((school) => {
                    return <SchoolItem key={school.name} school={school} />
                })}
            </tbody>
        </table>
    )
}
