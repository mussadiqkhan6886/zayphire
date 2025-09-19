'use client';

import { FaQuestion } from "react-icons/fa";
import { useState } from "react";
const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex cursor-pointer justify-between items-center py-4 text-left"
      >
        <span className="font-medium">{question}</span>
        <FaQuestion
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <p className="pb-4 text-sm text-gray-600 leading-relaxed">{answer}</p>}
    </div>
  )
}

export default FaqItem