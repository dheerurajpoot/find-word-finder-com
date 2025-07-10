import { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Aside vs Asside - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling between "aside" and "asside". Discover the proper usage, definitions, and common mistakes to avoid.',
}

export default function AsideVsAssidePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Aside vs Asside</h1>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg inline-block">
          <p className="text-lg md:text-xl font-semibold">Which spelling is correct?</p>
        </div>
      </div>

      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-200 bg-red-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">❌</span>
            <h2 className="text-2xl font-bold text-red-800">Incorrect</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-red-600 mb-4">asside</div>
            <p className="text-lg md:text-xl text-red-700">This spelling is incorrect and should not be used.</p>
          </div>
        </Card>

        <Card className="border-2 border-green-200 bg-green-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">✅</span>
            <h2 className="text-2xl font-bold text-green-800">Correct</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-green-600 mb-4">aside</div>
            <p className="text-lg md:text-xl text-green-700">This is the correct spelling with single &quot;s.&quot;</p>
          </div>
        </Card>
      </div>

      {/* Definition Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Aside (adverb/preposition)</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              To or toward the side; out of the way; apart from the main subject or consideration. 
              It can also refer to a remark made by an actor to the audience that other characters cannot hear.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Examples:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg md:text-xl text-gray-700">
              <li>She stepped <strong>aside</strong> to let the elderly man pass.</li>
              <li>Let&apos;s put that issue <strong>aside</strong> for now and focus on the main problem.</li>
              <li>The actor delivered an <strong>aside</strong> to the audience about his character&apos;s thoughts.</li>
              <li>He brushed <strong>aside</strong> all objections and proceeded with his plan.</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Why the Confusion */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Why the Confusion?</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            The confusion between &quot;aside&quot; and &quot;asside&quot; likely stems from:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Typographical errors:</strong> Adding an extra &quot;s&quot; when typing quickly</li>
            <li><strong>Phonetic similarity:</strong> Both spellings might sound similar when pronounced</li>
            <li><strong>Similar word patterns:</strong> Some words do have double &quot;s&quot; after &quot;a&quot;</li>
            <li><strong>Auto-correct issues:</strong> Some spell-checkers might not catch this error</li>
            <li><strong>Lack of proofreading:</strong> Not catching the error during review</li>
          </ul>
        </div>
      </Card>

      {/* Etymology and Spelling Rules */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Etymology and Spelling Rules</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            <strong>Word origin:</strong> The word &quot;aside&quot; comes from Middle English &quot;a + side,&quot; 
            meaning &quot;on the side&quot; or &quot;to the side.&quot;
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-900">Spelling pattern:</h4>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>Single &quot;a&quot; at the beginning</li>
              <li>Single &quot;s&quot; after &quot;a&quot;</li>
              <li>&quot;ide&quot; ending (like &quot;side&quot;)</li>
              <li>No double consonants</li>
            </ul>
          </div>
          <p className="mt-4">
            <strong>Memory tip:</strong> Think of &quot;aside&quot; as &quot;a + side&quot; - literally meaning &quot;to the side.&quot; 
            Since &quot;side&quot; has only one &quot;s,&quot; so does &quot;aside.&quot;
          </p>
        </div>
      </Card>

      {/* Synonyms */}
      <Card className="mb-8 p-6 bg-blue-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Aside&quot;</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl">
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Spatial:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>to the side</li>
              <li>out of the way</li>
              <li>apart</li>
              <li>separately</li>
              <li>away</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Conceptual:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>apart from</li>
              <li>excluding</li>
              <li>notwithstanding</li>
              <li>except for</li>
              <li>other than</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Usage Tips */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Tips</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">When to use &quot;aside&quot;:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>To indicate movement to the side</li>
              <li>To set something apart from the main topic</li>
              <li>In theatrical contexts for audience remarks</li>
              <li>To indicate exclusion or exception</li>
              <li>To suggest putting something out of consideration</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Common contexts:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Everyday conversation</li>
              <li>Academic writing</li>
              <li>Theater and drama</li>
              <li>Business communication</li>
              <li>Formal presentations</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* FAQ Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is &quot;asside&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: No, &quot;asside&quot; is never correct in standard English. It is always a spelling error for &quot;aside.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What&apos;s the pronunciation of &quot;aside&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: It is pronounced as /əˈsaɪd/ with the stress on the second syllable. The &quot;s&quot; is pronounced as a single &quot;s&quot; sound.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Are there related words with similar spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, words like &quot;side,&quot; &quot;beside,&quot; &quot;inside,&quot; and &quot;outside&quot; 
              all have single &quot;s&quot; and follow similar patterns.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Remember that &quot;aside&quot; comes from &quot;a + side,&quot; so it has only one &quot;s&quot; 
              just like the word &quot;side.&quot; Think: &quot;aside&quot; = &quot;a side.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is this a common spelling mistake?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, this is a relatively common spelling error, especially when typing quickly or when people 
              are not familiar with the word&apos;s etymology and spelling pattern.
            </p>
          </div>
        </div>
      </Card>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>&quot;Aside&quot;</strong> is the correct spelling with single &quot;s.&quot; The spelling &quot;asside&quot; 
          is incorrect and should never be used. This word comes from &quot;a + side&quot; and maintains the single &quot;s&quot; 
          spelling. Remember that &quot;aside&quot; has only one &quot;s&quot; because it literally means &quot;to the side,&quot; 
          and &quot;side&quot; also has only one &quot;s.&quot;
        </p>
      </div>
    </div>
  )
} 