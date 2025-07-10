import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { CheckCircle, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Attached vs Atached - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "attached" and "atached". Discover definitions, examples, and usage tips to avoid this common spelling mistake.',
  keywords: 'attached vs atached, spelling, correct spelling, attached, atached, word comparison',
  openGraph: {
    title: 'Attached vs Atached - Which is Correct?',
    description: 'Learn the correct spelling between "attached" and "atached". Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function AttachedVsAtachedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-8">Attached vs Atached</h1>
      
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
              <h3 className="text-xl font-bold text-green-800">Correct: Attached</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              The correct spelling is <strong>attached</strong>. This is the standard English spelling used in all contexts.
            </p>
          </div>
        </Card>

        <Card className="border-red-200 bg-red-50">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <XCircle className="text-red-600 mr-2" size={24} />
              <h3 className="text-xl font-bold text-red-800">Incorrect: Atached</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              <strong>Atached</strong> is a misspelling. The correct spelling is &quot;attached&quot; with two &quot;t&quot;s.
            </p>
          </div>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Definition of Attached</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl mb-4">
            <strong>Attached</strong> (adjective): Joined, fastened, or connected to something; emotionally connected or devoted to someone or something.
          </p>
          <p className="text-lg md:text-xl mb-4">
            <strong>Attached</strong> (verb, past tense): The past tense and past participle of &quot;attach,&quot; meaning to fasten, join, or connect something to another thing.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Examples of Correct Usage</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;Please find the document <em>attached</em> to this email.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;The photo was <em>attached</em> to the wall with tape.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;She is very <em>attached</em> to her childhood home.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Synonyms for Attached</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-lg mb-2">As &quot;fastened&quot;:</h4>
              <ul className="text-lg md:text-xl space-y-1">
                <li>• Fastened</li>
                <li>• Connected</li>
                <li>• Joined</li>
                <li>• Affixed</li>
                <li>• Secured</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">As &quot;emotionally connected&quot;:</h4>
              <ul className="text-lg md:text-xl space-y-1">
                <li>• Devoted</li>
                <li>• Fond</li>
                <li>• Loyal</li>
                <li>• Committed</li>
                <li>• Dedicated</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Common Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg">
          <ul className="text-lg md:text-xl space-y-3">
            <li>• <strong>Attached</strong> is commonly used in both formal and informal contexts</li>
            <li>• The word can be used as an adjective or as the past tense of the verb &quot;attach&quot;</li>
            <li>• Common phrases include &quot;attached to,&quot; &quot;attached file,&quot; and &quot;attached document&quot;</li>
            <li>• The present tense is &quot;attach&quot; and the present participle is &quot;attaching&quot;</li>
            <li>• Remember: there are two &quot;t&quot;s in &quot;attached&quot; - think of &quot;at&quot; + &quot;tach&quot; + &quot;ed&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: Why do people misspell &quot;attached&quot; as &quot;atached&quot;?</h4>
            <p className="text-lg md:text-xl">
              A: This misspelling likely occurs due to phonetic confusion. The double &quot;t&quot; sound might be heard as a single &quot;t&quot;, leading to the incorrect spelling.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: Is &quot;atached&quot; ever correct?</h4>
            <p className="text-lg md:text-xl">
              A: No, &quot;atached&quot; is never correct in English. It&apos;s always a misspelling of &quot;attached.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: How can I remember the correct spelling?</h4>
            <p className="text-lg md:text-xl">
              A: Think of the word as &quot;at&quot; + &quot;tach&quot; + &quot;ed&quot; - you need to &quot;tach&quot; (attach) something &quot;at&quot; a place. You can also remember that &quot;attached&quot; has the same double &quot;t&quot; pattern as &quot;attack&quot; and &quot;attempt.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: What&apos;s the difference between &quot;attached&quot; and &quot;connected&quot;?</h4>
            <p className="text-lg md:text-xl">
              A: &quot;Attached&quot; typically means physically fastened or joined to something, while &quot;connected&quot; can mean physically joined, electronically linked, or related in some way. &quot;Attached&quot; often implies a more direct physical connection.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <p className="text-lg md:text-xl">
          The correct spelling is <strong>attached</strong>. <strong>Atached</strong> is always incorrect. 
          Remember that &quot;attached&quot; has two &quot;t&quot;s and can be broken down as &quot;at&quot; + &quot;tach&quot; + &quot;ed&quot;. 
          This word is commonly used to mean fastened to something or emotionally connected to someone or something.
        </p>
      </div>
    </div>
  )
} 