import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Commitments or Committments - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;commitments&quot; and &quot;committments&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CommitmentsVsCommittmentsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Commitments or Committments</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-gray-800 text-center">
          Unsure whether to use &quot;commitments&quot; or &quot;committments&quot;? This page explains the correct spelling, meaning, and common mistakes.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-red-50 border-l-4 border-red-500">
          <CardContent>
            <div className="flex items-center mb-2">
              <span className="text-3xl mr-2">❌</span>
              <span className="text-2xl font-bold text-red-700">Committments</span>
            </div>
            <p className="text-lg md:text-xl text-red-800">Incorrect spelling</p>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border-l-4 border-green-500">
          <CardContent>
            <div className="flex items-center mb-2">
              <span className="text-3xl mr-2">✅</span>
              <span className="text-2xl font-bold text-green-700">Commitments</span>
            </div>
            <p className="text-lg md:text-xl text-green-800">Correct spelling</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definitions</h2>
        <div className="text-lg md:text-xl text-gray-800 mb-2">
          <b>&quot;Commitments&quot;</b> (noun): The state or quality of being dedicated to a cause, activity, etc.
        </div>
        <div className="text-lg md:text-xl text-gray-800">
          <b>Examples:</b>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>The company&apos;s &quot;commitment&quot; to quality</li>
            <li>I could not fault my players for &quot;commitment&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms</h2>
        <div className="bg-blue-50 p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className="text-lg md:text-xl text-blue-800 space-y-1">
            <li>Dedication</li>
            <li>Devotion</li>
          </ul>
          <ul className="text-lg md:text-xl text-blue-800 space-y-1">
            <li>Allegiance</li>
            <li>Loyalty</li>
          </ul>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Committments&quot; is a frequent error due to the double &quot;t&quot; confusion. The correct form is &quot;commitments&quot; with only one &quot;t&quot; after the &quot;i&quot;.</li>
          <li>Pronunciation: kəˈmɪtmənts</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow border">
            <b>Is it committments or &quot;commitments&quot;?</b>
            <div>The correct word is <b>commitments</b>.</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border">
            <b>How to pronounce &quot;commitments&quot;?</b>
            <div>The correct pronunciation is kəˈmɪtmənts.</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border">
            <b>What does &quot;commitments&quot; mean?</b>
            <div>The state or quality of being dedicated to a cause, activity, etc.</div>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          The correct spelling is <b>&quot;commitments&quot;</b>. &quot;Committments&quot; is a common misspelling. &quot;Commitments&quot; refers to the state or quality of being dedicated to a cause, activity, etc.
        </p>
      </div>
    </div>
  )
} 