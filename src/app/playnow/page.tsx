import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function PlayNow() {
  return (
    <section className='flex flex-col justify-center items-center text-center mt-16 gap-y-56'>
      <Image src="../assets/logo-dk.svg" alt="Logo" width={500} height={500} />
      <Link href="/draft" className='text-white bg-purple-800 border-2 border-yellow-500 w-64 text-center py-3 rounded-xl font-bold text-lg cursor-pointer'>
        PLAY NOW
      </Link>
    </section>
  )
}

export default PlayNow