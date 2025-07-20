import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Common or Comon - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;common&quot; and &quot;comon&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CommonVsComonPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Common or Comon</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-gray-800 text-center">
          Unsure whether to use &quot;common&quot; or &quot;comon&quot;? This page explains the correct spelling, meaning, and common mistakes.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-red-50 border-l-4 border-red-500">
          <CardContent>
            <div className="flex items-center mb-2">
              <span className="text-3xl mr-2">❌</span>
              <span className="text-2xl font-bold text-red-700">Comon</span>
            </div>
            <p className="text-lg md:text-xl text-red-800">Incorrect spelling</p>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border-l-4 border-green-500">
          <CardContent>
            <div className="flex items-center mb-2">
              <span className="text-3xl mr-2">✅</span>
              <span className="text-2xl font-bold text-green-700">Common</span>
            </div>
            <p className="text-lg md:text-xl text-green-800">Correct spelling</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definitions</h2>
        <div className="text-lg md:text-xl text-gray-800 mb-2">
          <b>&quot;Common&quot;</b> (adjective): Occurring, found, or done often; prevalent.
        </div>
        <div className="text-lg md:text-xl text-gray-800 mb-2">
          <b>&quot;Common&quot;</b> (noun): A piece of open land for public use.
        </div>
        <div className="text-lg md:text-xl text-gray-800">
          <b>Examples:</b>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Salt and pepper are the two most common seasonings.</li>
            <li>Common misspellings.</li>
            <li>It&apos;s common for children to have middle ear infections.</li>
            <li>We spent the morning tramping over the common looking for flowers.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms</h2>
        <div className="bg-blue-50 p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className="text-lg md:text-xl text-blue-800 space-y-1">
            <li>Usual</li>
            <li>Ordinary</li>
            <li>Customary</li>
            <li>Habitual</li>
          </ul>
          <ul className="text-lg md:text-xl text-blue-800 space-y-1">
            <li>Frequent</li>
            <li>General</li>
            <li>Public</li>
            <li>Shared</li>
          </ul>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Common&quot; is the correct spelling. &quot;Comon&quot; is never correct.</li>
          <li>Pronunciation: ˈkɒmən</li>
          <li>Use &quot;common&quot; to describe something that occurs frequently or is shared by many.</li>
          <li>Common mistake: omitting one &quot;m&quot; in the spelling.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow border">
            <b>Is it &quot;comon&quot; or &quot;common&quot;?</b>
            <div>The correct word is <b>&quot;common&quot;</b>.</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border">
            <b>How to pronounce &quot;common&quot;?</b>
            <div>The correct pronunciation is ˈkɒmən.</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border">
            <b>What does &quot;common&quot; mean?</b>
            <div>Occurring, found, or done often; prevalent. Also, a piece of open land for public use.</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border">
            <b>Can &quot;common&quot; be used as a noun?</b>
            <div>Yes, it can refer to a piece of open land for public use, such as a village common.</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border">
            <b>What are some common synonyms for &quot;common&quot;?</b>
            <div>Usual, ordinary, customary, habitual, frequent, general, public, shared.</div>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          The correct spelling is <b>&quot;common&quot;</b>. &quot;Comon&quot; is a common misspelling. &quot;Common&quot; means occurring, found, or done often; prevalent, or a piece of open land for public use. Always use &quot;common&quot; with two &quot;m&quot;s.
        </p>
      </div>
    </div>
  )
} 