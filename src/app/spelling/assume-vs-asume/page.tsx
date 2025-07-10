import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { CheckCircle, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Assume vs Asume - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "assume" and "asume". Discover definitions, examples, and usage tips to avoid this common spelling mistake.',
  keywords: 'assume vs asume, spelling, correct spelling, assume, asume, word comparison',
  openGraph: {
    title: 'Assume vs Asume - Which is Correct?',
    description: 'Learn the correct spelling between "assume" and "asume". Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function AssumeVsAsumePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-8">Assume vs Asume</h1>
      
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
              <h3 className="text-xl font-bold text-green-800">Correct: Assume</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              The correct spelling is <strong>assume</strong>. This is the standard English spelling used in all contexts.
            </p>
          </div>
        </Card>

        <Card className="border-red-200 bg-red-50">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <XCircle className="text-red-600 mr-2" size={24} />
              <h3 className="text-xl font-bold text-red-800">Incorrect: Asume</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              <strong>Asume</strong> is a misspelling. The correct spelling is &quot;assume&quot; with two &quot;s&quot;s.
            </p>
          </div>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Definition of Assume</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl mb-4">
            <strong>Assume</strong> (verb): To take for granted or accept as true without proof; to suppose or presume something to be the case.
          </p>
          <p className="text-lg md:text-xl mb-4">
            <strong>Assume</strong> can also mean to take on a role, responsibility, or position, or to adopt a particular manner or appearance.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Examples of Correct Usage</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;I <em>assume</em> you&apos;ll be at the meeting tomorrow.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;She will <em>assume</em> the role of manager next month.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;Don&apos;t <em>assume</em> anything without checking the facts first.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Synonyms for Assume</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-lg mb-2">As &quot;suppose&quot;:</h4>
              <ul className="text-lg md:text-xl space-y-1">
                <li>• Presume</li>
                <li>• Suppose</li>
                <li>• Believe</li>
                <li>• Think</li>
                <li>• Expect</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">As &quot;take on&quot;:</h4>
              <ul className="text-lg md:text-xl space-y-1">
                <li>• Take over</li>
                <li>• Adopt</li>
                <li>• Undertake</li>
                <li>• Accept</li>
                <li>• Shoulder</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Common Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg">
          <ul className="text-lg md:text-xl space-y-3">
            <li>• <strong>Assume</strong> is commonly used in both formal and informal contexts</li>
            <li>• The word can be used transitively (assume responsibility) or intransitively (assume without proof)</li>
            <li>• Common phrases include &quot;assume control,&quot; &quot;assume responsibility,&quot; and &quot;assume the worst&quot;</li>
            <li>• The past tense is &quot;assumed&quot; and the present participle is &quot;assuming&quot;</li>
            <li>• Remember: there are two &quot;s&quot;s in &quot;assume&quot; - think of &quot;as&quot; + &quot;sume&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: Why do people misspell &quot;assume&quot; as &quot;asume&quot;?</h4>
            <p className="text-lg md:text-xl">
              A: This misspelling likely occurs due to phonetic confusion. The double &quot;s&quot; sound might be heard as a single &quot;s&quot;, leading to the incorrect spelling.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: Is &quot;asume&quot; ever correct?</h4>
            <p className="text-lg md:text-xl">
              A: No, &quot;asume&quot; is never correct in English. It&apos;s always a misspelling of &quot;assume.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: How can I remember the correct spelling?</h4>
            <p className="text-lg md:text-xl">
              A: Think of the word as &quot;as&quot; + &quot;sume&quot; - you need to &quot;sume&quot; (take) something &quot;as&quot; true. You can also remember that &quot;assume&quot; has the same double &quot;s&quot; pattern as &quot;assumption.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: What&apos;s the difference between &quot;assume&quot; and &quot;presume&quot;?</h4>
            <p className="text-lg md:text-xl">
              A: &quot;Assume&quot; means to take something for granted without proof, while &quot;presume&quot; suggests taking something as true based on probability or reasonable grounds. &quot;Presume&quot; often implies more confidence than &quot;assume.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <p className="text-lg md:text-xl">
          The correct spelling is <strong>assume</strong>. <strong>Asume</strong> is always incorrect. 
          Remember that &quot;assume&quot; has two &quot;s&quot;s and can be broken down as &quot;as&quot; + &quot;sume&quot;. 
          This word is commonly used to mean supposing something to be true or taking on a role or responsibility.
        </p>
      </div>
    </div>
  )
} 