import React from 'react'
import { Facebook, Github, Telegram } from './icons'

export default function Contact() {
    return (
      <div className='flex items-center gap-6 '>
        <Facebook/>
        <Telegram/>
        <Github/>
    </div>
  )
}
