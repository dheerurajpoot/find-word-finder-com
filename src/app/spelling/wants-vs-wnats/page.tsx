import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Wants or Wnats - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;wants&quot; and &quot;wnats&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WantsVsWnatsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Wants or Wnats</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;wants&quot; and &quot;wnats&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Wnats</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Wnats&quot; is a misspelling, usually a typo. The correct spelling is &quot;wants&quot; with the letters in the right order.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Wants</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Wants&quot; is the correct spelling. It is the third person singular present tense of the verb &quot;want&quot; or the plural noun for desires or needs.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Wants</strong> is the correct spelling. It is a verb (third person singular) or a plural noun meaning desires or needs.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wnats</strong> is a common typo and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Wants (verb, third person singular)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            The third person singular present tense of &quot;want&quot;; to desire or wish for something.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Wants (noun, plural)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Plural of &quot;want&quot;; things that are desired or needed.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Usage</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used to describe desires, needs, or wishes, or the act of desiring something.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;She <span className="text-green-600 font-semibold">wants</span> a new bike.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;He <span className="text-green-600 font-semibold">wants</span> to travel the world.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;Our basic <span className="text-green-600 font-semibold">wants</span> include food, water, and shelter.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;She <span className="text-red-600 font-semibold">wnats</span> a new bike&quot; (should be &quot;wants&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For desires:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Desires</li>
                <li>• Wishes</li>
                <li>• Needs</li>
                <li>• Cravings</li>
                <li>• Yearnings</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For needs:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Requirements</li>
                <li>• Necessities</li>
                <li>• Demands</li>
                <li>• Longings</li>
                <li>• Aspirations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Wants&quot; is spelled with the letters in the correct order: w-a-n-t-s</li>
          <li>• It is both a verb and a plural noun</li>
          <li>• The word comes from Old Norse &quot;vanta&quot; meaning to lack</li>
          <li>• Used in both everyday and economic contexts</li>
          <li>• &quot;Wnats&quot; is a common typo, not a word</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;wnats&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;wnats&quot; is never correct. The correct spelling is always &quot;wants&quot; with the letters in the right order.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;wants&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;wahnts&quot; with a short &quot;a&quot; sound.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;wants&quot; and &quot;wnats&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Wants&quot; is the correct spelling for desires or needs, while &quot;wnats&quot; is simply a typo that should never be used.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;wants&quot; be used as both a verb and a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;wants&quot; can be the third person singular present tense of the verb &quot;want&quot; or the plural noun for desires or needs.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to mistype &quot;wants&quot; as &quot;wnats&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;wnats&quot; is a common typo, especially when typing quickly. Always double-check your spelling.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Wants</strong> is the correct spelling. It is a verb (third person singular) or a plural noun meaning desires or needs.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wnats</strong> is always incorrect. Remember to keep the letters in the right order: w-a-n-t-s.
        </p>
      </div>
    </div>
  )
} 