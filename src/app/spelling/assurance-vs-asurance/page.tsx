import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { CheckCircle, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Assurance vs Asurance - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "assurance" and "asurance". Discover definitions, examples, and usage tips to avoid this common spelling mistake.',
  keywords: 'assurance vs asurance, spelling, correct spelling, assurance, asurance, word comparison',
  openGraph: {
    title: 'Assurance vs Asurance - Which is Correct?',
    description: 'Learn the correct spelling between "assurance" and "asurance". Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function AssuranceVsAsurancePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-8">Assurance vs Asurance</h1>
      
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
              <h3 className="text-xl font-bold text-green-800">Correct: Assurance</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              The correct spelling is <strong>assurance</strong>. This is the standard English spelling used in all contexts.
            </p>
          </div>
        </Card>

        <Card className="border-red-200 bg-red-50">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <XCircle className="text-red-600 mr-2" size={24} />
              <h3 className="text-xl font-bold text-red-800">Incorrect: Asurance</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              <strong>Asurance</strong> is a misspelling. The correct spelling is &quot;assurance&quot; with two &quot;s&quot;s.
            </p>
          </div>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Definition of Assurance</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl mb-4">
            <strong>Assurance</strong> (noun): A positive declaration intended to give confidence; a promise or guarantee; a feeling of certainty or confidence.
          </p>
          <p className="text-lg md:text-xl mb-4">
            <strong>Assurance</strong> can also refer to insurance, particularly life insurance, or a form of confidence and self-assurance.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Examples of Correct Usage</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;He gave me his <em>assurance</em> that the project would be completed on time.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;The company provides quality <em>assurance</em> for all its products.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;She spoke with great <em>assurance</em> during the presentation.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Synonyms for Assurance</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-lg mb-2">As &quot;guarantee&quot;:</h4>
              <ul className="text-lg md:text-xl space-y-1">
                <li>• Guarantee</li>
                <li>• Promise</li>
                <li>• Pledge</li>
                <li>• Commitment</li>
                <li>• Warranty</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">As &quot;confidence&quot;:</h4>
              <ul className="text-lg md:text-xl space-y-1">
                <li>• Confidence</li>
                <li>• Certainty</li>
                <li>• Conviction</li>
                <li>• Self-assurance</li>
                <li>• Poise</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Common Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg">
          <ul className="text-lg md:text-xl space-y-3">
            <li>• <strong>Assurance</strong> is commonly used in both formal and informal contexts</li>
            <li>• The word can refer to promises, guarantees, confidence, or insurance</li>
            <li>• Common phrases include &quot;quality assurance,&quot; &quot;life assurance,&quot; and &quot;give assurance&quot;</li>
            <li>• The related verb is &quot;assure&quot; and the adjective is &quot;assured&quot;</li>
            <li>• Remember: there are two &quot;s&quot;s in &quot;assurance&quot; - think of &quot;assure&quot; + &quot;ance&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: Why do people misspell &quot;assurance&quot; as &quot;asurance&quot;?</h4>
            <p className="text-lg md:text-xl">
              A: This misspelling likely occurs due to phonetic confusion. The double &quot;s&quot; sound might be heard as a single &quot;s&quot;, leading to the incorrect spelling.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: Is &quot;asurance&quot; ever correct?</h4>
            <p className="text-lg md:text-xl">
              A: No, &quot;asurance&quot; is never correct in English. It&apos;s always a misspelling of &quot;assurance.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: How can I remember the correct spelling?</h4>
            <p className="text-lg md:text-xl">
              A: Think of the word as &quot;assure&quot; + &quot;ance&quot; - you need to &quot;assure&quot; someone of something. You can also remember that &quot;assurance&quot; has the same double &quot;s&quot; pattern as &quot;assume&quot; and &quot;assure.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: What&apos;s the difference between &quot;assurance&quot; and &quot;insurance&quot;?</h4>
            <p className="text-lg md:text-xl">
              A: &quot;Assurance&quot; typically refers to life insurance or guarantees, while &quot;insurance&quot; is a broader term covering various types of protection against risks. &quot;Assurance&quot; often implies certainty, while &quot;insurance&quot; implies protection against uncertainty.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <p className="text-lg md:text-xl">
          The correct spelling is <strong>assurance</strong>. <strong>Asurance</strong> is always incorrect. 
          Remember that &quot;assurance&quot; has two &quot;s&quot;s and comes from the word &quot;assure&quot;. 
          This word is commonly used to mean guarantees, promises, confidence, or certain types of insurance.
        </p>
      </div>
    </div>
  )
} 