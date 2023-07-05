'use client'

import InfoIcon from '@/components/Icon/InfoIcon'
import InfoModal from '@/components/InfoModal'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Modal Imports
import { useState } from 'react'

function PlayNow() {
  const [openModal, setopenModal] = useState(false)


  return (
    <>
      <button onClick={() => setopenModal(true)} className='w-12 h-12 bg-slate-100 mx-14 my-1 border-2 rounded-xl border-yellow-500 flex items-center justify-center text-2xl font-bold'>
        <InfoIcon />
      </button>
      <InfoModal
        open={openModal}
        onClose={() => setopenModal(false)}
      />
      <section className='flex flex-col justify-center items-center text-center mt-3 gap-y-56'>
        <Image src="../assets/logo-dk.svg" alt="Logo" width={500} height={500} />
        <Link href="/draft" className='text-white bg-purple-800 border-2 border-yellow-500 w-64 text-center py-3 rounded-xl font-bold text-lg cursor-pointer'>
          PLAY NOW
        </Link>
      </section>
    </>
  )
}

export default PlayNow