import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { CheckCircle, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Assure vs Asure - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "assure" and "asure". Discover definitions, examples, and usage tips to avoid this common spelling mistake.',
  keywords: 'assure vs asure, spelling, correct spelling, assure, asure, word comparison',
  openGraph: {
    title: 'Assure vs Asure - Which is Correct?',
    description: 'Learn the correct spelling between "assure" and "asure". Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function AssureVsAsurePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-8">Assure vs Asure</h1>
      
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
              <h3 className="text-xl font-bold text-green-800">Correct: Assure</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              The correct spelling is <strong>assure</strong>. This is the standard English spelling used in all contexts.
            </p>
          </div>
        </Card>

        <Card className="border-red-200 bg-red-50">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <XCircle className="text-red-600 mr-2" size={24} />
              <h3 className="text-xl font-bold text-red-800">Incorrect: Asure</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              <strong>Asure</strong> is a misspelling. The correct spelling is &quot;assure&quot; with two &quot;s&quot;s.
            </p>
          </div>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Definition of Assure</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl mb-4">
            <strong>Assure</strong> (verb): To tell someone confidently that something is true, especially to remove their doubts; to guarantee or promise something.
          </p>
          <p className="text-lg md:text-xl mb-4">
            <strong>Assure</strong> can also mean to make something certain or to give confidence to someone.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Examples of Correct Usage</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;I can <em>assure</em> you that the work will be completed on time.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;She <em>assured</em> me that everything would be fine.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;The doctor <em>assured</em> the patient that the procedure was safe.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Synonyms for Assure</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-lg mb-2">As &quot;guarantee&quot;:</h4>
              <ul className="text-lg md:text-xl space-y-1">
                <li>• Guarantee</li>
                <li>• Promise</li>
                <li>• Pledge</li>
                <li>• Vow</li>
                <li>• Commit</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">As &quot;convince&quot;:</h4>
              <ul className="text-lg md:text-xl space-y-1">
                <li>• Convince</li>
                <li>• Reassure</li>
                <li>• Comfort</li>
                <li>• Satisfy</li>
                <li>• Persuade</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Common Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg">
          <ul className="text-lg md:text-xl space-y-3">
            <li>• <strong>Assure</strong> is commonly used in both formal and informal contexts</li>
            <li>• The word is typically used with a person as the object (assure someone of something)</li>
            <li>• Common phrases include &quot;assure you,&quot; &quot;assure someone,&quot; and &quot;rest assured&quot;</li>
            <li>• The past tense is &quot;assured&quot; and the present participle is &quot;assuring&quot;</li>
            <li>• Remember: there are two &quot;s&quot;s in &quot;assure&quot; - think of &quot;as&quot; + &quot;sure&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: Why do people misspell &quot;assure&quot; as &quot;asure&quot;?</h4>
            <p className="text-lg md:text-xl">
              A: This misspelling likely occurs due to phonetic confusion. The double &quot;s&quot; sound might be heard as a single &quot;s&quot;, leading to the incorrect spelling.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: Is &quot;asure&quot; ever correct?</h4>
            <p className="text-lg md:text-xl">
              A: No, &quot;asure&quot; is never correct in English. It&apos;s always a misspelling of &quot;assure.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: How can I remember the correct spelling?</h4>
            <p className="text-lg md:text-xl">
              A: Think of the word as &quot;as&quot; + &quot;sure&quot; - you are &quot;sure&quot; about something &quot;as&quot; you tell someone. You can also remember that &quot;assure&quot; has the same double &quot;s&quot; pattern as &quot;assume&quot; and &quot;assurance.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: What&apos;s the difference between &quot;assure,&quot; &quot;ensure,&quot; and &quot;insure&quot;?</h4>
            <p className="text-lg md:text-xl">
              A: &quot;Assure&quot; means to tell someone confidently that something is true. &quot;Ensure&quot; means to make certain that something happens. &quot;Insure&quot; means to provide insurance coverage or protection against loss.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <p className="text-lg md:text-xl">
          The correct spelling is <strong>assure</strong>. <strong>Asure</strong> is always incorrect. 
          Remember that &quot;assure&quot; has two &quot;s&quot;s and can be broken down as &quot;as&quot; + &quot;sure&quot;. 
          This word is commonly used to mean guaranteeing something to someone or giving them confidence.
        </p>
      </div>
    </div>
  )
} 