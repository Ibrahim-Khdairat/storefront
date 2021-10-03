import React from 'react'
import ActiveCategory from './ActiveCategory'
import Categories from './Categories'
import Products from './Products'

export default function Main() {
    return (
        <div>
            <Categories/>
            <ActiveCategory/>
            <Products/>
        </div>
    )
}
