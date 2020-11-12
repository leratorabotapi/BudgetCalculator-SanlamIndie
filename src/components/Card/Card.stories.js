import React from 'react'
import Card from "./Card"

export default {
  title: 'Card',
  component: Card
}


export const SmallCard = () => <Card varient="small"></Card>
export const BigCard = () => <Card varient="big"></Card>


