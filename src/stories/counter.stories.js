import React from 'react'
import Counter from '../components/counter'

export default {
    title: "Counter",
    component: Counter
}

export const defaultCounter = () => (
    <Counter />
)

export const defaultCounterValue10 = () => (
    <Counter initialValue={10} />
)
