import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Communities or Communitys - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;communities&quot; and &quot;communitys&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CommunitiesVsCommunitysPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Communities or Communitys</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-gray-800 text-center">
          Unsure whether to use &quot;communities&quot; or &quot;communitys&quot;? This page explains the correct spelling, meaning, and common mistakes.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-red-50 border-l-4 border-red-500">
          <CardContent>
            <div className="flex items-center mb-2">
              <span className="text-3xl mr-2">❌</span>
              <span className="text-2xl font-bold text-red-700">Communitys</span>
            </div>
            <p className="text-lg md:text-xl text-red-800">Incorrect spelling</p>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border-l-4 border-green-500">
          <CardContent>
            <div className="flex items-center mb-2">
              <span className="text-3xl mr-2">✅</span>
              <span className="text-2xl font-bold text-green-700">Communities</span>
            </div>
            <p className="text-lg md:text-xl text-green-800">Correct spelling</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definitions</h2>
        <div className="text-lg md:text-xl text-gray-800 mb-2">
          <b>&quot;Communities&quot;</b> (noun): Groups of people living in the same place or having a particular characteristic in common.
        </div>
        <div className="text-lg md:text-xl text-gray-800">
          <b>Examples:</b>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Montreal&apos;s Italian &quot;community&quot;</li>
            <li>The gay &quot;community&quot; in London</li>
            <li>The scientific &quot;community&quot;</li>
            <li>Several &quot;communities&quot; came together for the festival.</li>
            <li>Rural and urban &quot;communities&quot; face different challenges.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms</h2>
        <div className="bg-blue-50 p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className="text-lg md:text-xl text-blue-800 space-y-1">
            <li>Group</li>
            <li>Section</li>
            <li>Body</li>
            <li>Company</li>
          </ul>
          <ul className="text-lg md:text-xl text-blue-800 space-y-1">
            <li>Society</li>
            <li>Population</li>
            <li>Public</li>
            <li>Neighborhood</li>
          </ul>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Communities&quot; is the correct plural form of &quot;community&quot;. &quot;Communitys&quot; is never correct.</li>
          <li>Pronunciation: kəˈmjuːnɪtiːz</li>
          <li>Use &quot;communities&quot; when referring to more than one community.</li>
          <li>Common mistake: adding just &quot;s&quot; to form the plural. The correct ending is &quot;-ies&quot;.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow border">
            <b>Is it &quot;communitys&quot; or &quot;communities&quot;?</b>
            <div>The correct word is <b>&quot;communities&quot;</b>.</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border">
            <b>How to pronounce &quot;communities&quot;?</b>
            <div>The correct pronunciation is kəˈmjuːnɪtiːz.</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border">
            <b>What does &quot;communities&quot; mean?</b>
            <div>Groups of people living in the same place or having a particular characteristic in common.</div>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          The correct spelling is <b>&quot;communities&quot;</b>. &quot;Communitys&quot; is a common misspelling. &quot;Communities&quot; is the plural form of &quot;community&quot; and refers to more than one group of people living in the same place or having a particular characteristic in common.
        </p>
      </div>
    </div>
  )
} 