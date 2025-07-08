import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Allotment or Alotment - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;allotment&quot; and &quot;alotment&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AllotmentVsAlotmentPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Allotment or Alotment</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;allotment&quot; and &quot;alotment&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Alotment</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Alotment&quot; is a misspelling. The correct spelling is &quot;allotment&quot; with two &quot;l&quot;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Allotment</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Allotment&quot; is the correct spelling. It means a portion or share that has been allocated.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Allotment (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A portion or share that has been allocated; a plot of land assigned for cultivation.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Each family received an <strong>allotment</strong> of land.</li>
                  <li>• The budget <strong>allotment</strong> for this project is $50,000.</li>
                  <li>• They have a garden <strong>allotment</strong> in the community.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Alotment (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Alotment&quot; is a misspelling of &quot;allotment&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Alotment&quot; is not used in standard English.</li>
                  <li>• Always use <strong>allotment</strong> when referring to allocation.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Allotment:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Allocation</li>
                <li>• Portion</li>
                <li>• Share</li>
                <li>• Assignment</li>
                <li>• Distribution</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Alotment:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Allotment</strong> is spelled with two &quot;l&quot;s, not one.</li>
            <li>• Used to describe a portion or share that has been allocated.</li>
            <li>• Commonly used in land management and budget contexts.</li>
            <li>• The word comes from the verb &quot;allot&quot; meaning to distribute.</li>
            <li>• &quot;Alotment&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;alotment&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;alotment&quot; is never correct. The proper spelling is always &quot;allotment.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;allot-ment&quot; - it comes from the verb &quot;allot&quot; which has two &quot;l&quot;s.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between allotment and allocation?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Allotment&quot; refers to the portion that has been allocated, while &quot;allocation&quot; refers to the process of distributing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;allotment&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: land allotment, budget allotment, time allotment, and garden allotment.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;alotment&quot; occurs because people drop one &quot;l&quot; thinking it should be spelled like &quot;a lot.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can allotment be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;allotment&quot; is appropriate in both formal and informal writing, especially in business contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is allotment always about land or money?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;allotment&quot; can refer to any portion or share that has been allocated, including time, resources, or space.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can allotment be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;allotment&quot; is a noun. The verb form is &quot;allot&quot; meaning to distribute or assign.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Allotment</strong> is the correct spelling with two &quot;l&quot;s. It means a portion or share that has been allocated. The misspelling &quot;alotment&quot; is never correct. Use &quot;allotment&quot; in land, budget, and resource contexts.</p>
      </div>
    </div>
  )
} 