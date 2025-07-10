import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { CheckCircle, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Attempt vs Atempt - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "attempt" and "atempt". Discover definitions, examples, and usage tips to avoid this common spelling mistake.',
  keywords: 'attempt vs atempt, spelling, correct spelling, attempt, atempt, word comparison',
  openGraph: {
    title: 'Attempt vs Atempt - Which is Correct?',
    description: 'Learn the correct spelling between "attempt" and "atempt". Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function AttemptVsAtemptPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-8">Attempt vs Atempt</h1>
      
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
              <h3 className="text-xl font-bold text-green-800">Correct: Attempt</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              The correct spelling is <strong>attempt</strong>. This is the standard English spelling used in all contexts.
            </p>
          </div>
        </Card>

        <Card className="border-red-200 bg-red-50">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <XCircle className="text-red-600 mr-2" size={24} />
              <h3 className="text-xl font-bold text-red-800">Incorrect: Atempt</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              <strong>Atempt</strong> is a misspelling. The correct spelling is &quot;attempt&quot; with two &quot;t&quot;s.
            </p>
          </div>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Definition of Attempt</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl mb-4">
            <strong>Attempt</strong> (verb): To try to do something, especially something difficult; to make an effort to achieve or accomplish something.
          </p>
          <p className="text-lg md:text-xl mb-4">
            <strong>Attempt</strong> (noun): An act of trying to do something, especially something difficult; an effort to achieve or accomplish something.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Examples of Correct Usage</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;She will <em>attempt</em> to climb the mountain next week.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;This was his third <em>attempt</em> at passing the exam.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;They <em>attempted</em> to solve the puzzle together.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Synonyms for Attempt</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-lg mb-2">As &quot;try&quot;:</h4>
              <ul className="text-lg md:text-xl space-y-1">
                <li>• Try</li>
                <li>• Endeavor</li>
                <li>• Strive</li>
                <li>• Seek</li>
                <li>• Undertake</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">As &quot;effort&quot;:</h4>
              <ul className="text-lg md:text-xl space-y-1">
                <li>• Effort</li>
                <li>• Try</li>
                <li>• Endeavor</li>
                <li>• Bid</li>
                <li>• Shot</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Common Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg">
          <ul className="text-lg md:text-xl space-y-3">
            <li>• <strong>Attempt</strong> is commonly used in both formal and informal contexts</li>
            <li>• The word can be used as both a verb and a noun</li>
            <li>• Common phrases include &quot;attempt to,&quot; &quot;make an attempt,&quot; and &quot;attempt at&quot;</li>
            <li>• The past tense is &quot;attempted&quot; and the present participle is &quot;attempting&quot;</li>
            <li>• Remember: there are two &quot;t&quot;s in &quot;attempt&quot; - think of &quot;at&quot; + &quot;tempt&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: Why do people misspell &quot;attempt&quot; as &quot;atempt&quot;?</h4>
            <p className="text-lg md:text-xl">
              A: This misspelling likely occurs due to phonetic confusion. The double &quot;t&quot; sound might be heard as a single &quot;t&quot;, leading to the incorrect spelling.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: Is &quot;atempt&quot; ever correct?</h4>
            <p className="text-lg md:text-xl">
              A: No, &quot;atempt&quot; is never correct in English. It&apos;s always a misspelling of &quot;attempt.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: How can I remember the correct spelling?</h4>
            <p className="text-lg md:text-xl">
              A: Think of the word as &quot;at&quot; + &quot;tempt&quot; - you are &quot;tempted&quot; to try something &quot;at&quot; a certain time. You can also remember that &quot;attempt&quot; has the same double &quot;t&quot; pattern as &quot;attack&quot; and &quot;attain.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: What&apos;s the difference between &quot;attempt&quot; and &quot;try&quot;?</h4>
            <p className="text-lg md:text-xl">
              A: &quot;Attempt&quot; often implies a more formal or serious effort, while &quot;try&quot; is more general and casual. &quot;Attempt&quot; is commonly used for challenging or difficult tasks, while &quot;try&quot; can be used for any effort.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <p className="text-lg md:text-xl">
          The correct spelling is <strong>attempt</strong>. <strong>Atempt</strong> is always incorrect. 
          Remember that &quot;attempt&quot; has two &quot;t&quot;s and can be broken down as &quot;at&quot; + &quot;tempt&quot;. 
          This word is commonly used to mean trying to do something, especially something difficult, and can be used as both a verb and a noun.
        </p>
      </div>
    </div>
  )
} 