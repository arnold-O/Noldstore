import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'



export default function SinglePage() {
  const {product} = useGlobalContext()
  const {productId} = useParams()

  const productItem = product.find((item)=> item.id == productId)

  const {name, img, id, price } = productItem
  console.log(productItem)
  return (
    <>
    

    </>
  )
}
