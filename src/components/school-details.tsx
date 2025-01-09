import React from 'react'
import { SchoolData } from '../types/school-data'

type SchoolDetailProps = {
    school: SchoolData
}

export const SchoolDetail = ({school}: SchoolDetailProps) => {
    return (
        <div>
        <h2>{school.name}</h2>
        <dl>
            <dt>GPA: {school.average_student_gpa}</dt>
            <dt>Quality Score: {school.quality_score}</dt>
            <dt>Diversity</dt>
            <dd>International Percentage: {school.diversity.international_percentage}</dd>
            <dd>Female Percentage: {school.diversity.female_percentage}</dd>
            <dd>Male Percentage: {school.diversity.male_percentage}</dd>
        </dl>
        </div>
    )
}