import React from 'react'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'

function ParceriaCard({ img, alt, text, name, role }) {
  return (
    <div>
      <div className="flex font-secondFont flex-col p-6 md:p-4 max-w-[300px] md:w-fit bg-primaryLight rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
        {/* Imagem */}
        <div className="w-full h-fit overflow-hidden mb-6">
          <img src={img} alt={alt} className="w-full h-full object-cover" />
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col justify-between ">
          {/* Texto */}
          <p className="text-corOutrosTextosBranca text-base leading-relaxed italic">
            “{text}”
          </p>

          {/* Rodapé */}
          <div className="mt-6 border-t pt-4">
            <p className="font-semibold text-white">{name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParceriaCard
