import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { CheckCircle, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Assured vs Asured - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "assured" and "asured". Discover definitions, examples, and usage tips to avoid this common spelling mistake.',
  keywords: 'assured vs asured, spelling, correct spelling, assured, asured, word comparison',
  openGraph: {
    title: 'Assured vs Asured - Which is Correct?',
    description: 'Learn the correct spelling between "assured" and "asured". Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function AssuredVsAsuredPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-8">Assured vs Asured</h1>
      
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-center">
          Learn the difference between these commonly confused spellings and when to use each one.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-green-200 bg-green-50">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <CheckCircle className="text-green-600 mr-2" size={24} />
              <h3 className="text-xl font-bold text-green-800">Correct: Assured</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              The correct spelling is <strong>assured</strong>. This is the standard English spelling used in all contexts.
            </p>
          </div>
        </Card>

        <Card className="border-red-200 bg-red-50">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <XCircle className="text-red-600 mr-2" size={24} />
              <h3 className="text-xl font-bold text-red-800">Incorrect: Asured</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              <strong>Asured</strong> is a misspelling. The correct spelling is &quot;assured&quot; with two &quot;s&quot;s.
            </p>
          </div>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Definition of Assured</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl mb-4">
            <strong>Assured</strong> (adjective): Confident and certain; guaranteed or promised; self-confident and poised.
          </p>
          <p className="text-lg md:text-xl mb-4">
            <strong>Assured</strong> (verb, past tense): The past tense and past participle of &quot;assure,&quot; meaning to have guaranteed or promised something.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Examples of Correct Usage</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;She spoke with an <em>assured</em> manner during the presentation.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;He <em>assured</em> me that the project would be completed on time.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;The team had an <em>assured</em> victory in the championship.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Synonyms for Assured</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-lg mb-2">As &quot;confident&quot;:</h4>
              <ul className="text-lg md:text-xl space-y-1">
                <li>• Confident</li>
                <li>• Self-assured</li>
                <li>• Poised</li>
                <li>• Composed</li>
                <li>• Certain</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">As &quot;guaranteed&quot;:</h4>
              <ul className="text-lg md:text-xl space-y-1">
                <li>• Guaranteed</li>
                <li>• Promised</li>
                <li>• Secured</li>
                <li>• Certain</li>
                <li>• Confirmed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Common Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg">
          <ul className="text-lg md:text-xl space-y-3">
            <li>• <strong>Assured</strong> is commonly used in both formal and informal contexts</li>
            <li>• As an adjective, it describes someone who is confident or something that is guaranteed</li>
            <li>• As a verb, it&apos;s the past tense of &quot;assure&quot; meaning to have guaranteed something</li>
            <li>• Common phrases include &quot;assured manner,&quot; &quot;assured victory,&quot; and &quot;rest assured&quot;</li>
            <li>• Remember: there are two &quot;s&quot;s in &quot;assured&quot; - think of &quot;assure&quot; + &quot;d&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: Why do people misspell &quot;assured&quot; as &quot;asured&quot;?</h4>
            <p className="text-lg md:text-xl">
              A: This misspelling likely occurs due to phonetic confusion. The double &quot;s&quot; sound might be heard as a single &quot;s&quot;, leading to the incorrect spelling.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: Is &quot;asured&quot; ever correct?</h4>
            <p className="text-lg md:text-xl">
              A: No, &quot;asured&quot; is never correct in English. It&apos;s always a misspelling of &quot;assured.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: How can I remember the correct spelling?</h4>
            <p className="text-lg md:text-xl">
              A: Think of the word as &quot;assure&quot; + &quot;d&quot; - it&apos;s the past tense of &quot;assure.&quot; You can also remember that &quot;assured&quot; has the same double &quot;s&quot; pattern as &quot;assume&quot; and &quot;assure.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: What&apos;s the difference between &quot;assured&quot; and &quot;ensured&quot;?</h4>
            <p className="text-lg md:text-xl">
              A: &quot;Assured&quot; means to have told someone confidently that something is true, while &quot;ensured&quot; means to have made certain that something happened. &quot;Assured&quot; focuses on giving confidence to someone, while &quot;ensured&quot; focuses on making something certain.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <p className="text-lg md:text-xl">
          The correct spelling is <strong>assured</strong>. <strong>Asured</strong> is always incorrect. 
          Remember that &quot;assured&quot; has two &quot;s&quot;s and comes from the word &quot;assure&quot;. 
          This word can be used as an adjective meaning confident or guaranteed, or as the past tense of the verb &quot;assure.&quot;
        </p>
      </div>
    </div>
  )
} 