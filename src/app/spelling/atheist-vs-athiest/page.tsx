import { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Atheist vs Athiest - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling between "atheist" and "athiest". Discover the proper usage, definitions, and common mistakes to avoid.',
}

export default function AtheistVsAthiestPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Atheist or Athiest</h1>
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
            <div className="text-6xl font-bold text-red-600 mb-4">athiest</div>
            <p className="text-lg md:text-xl text-red-700">This spelling is incorrect and should not be used.</p>
          </div>
        </Card>

        <Card className="border-2 border-green-200 bg-green-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">✅</span>
            <h2 className="text-2xl font-bold text-green-800">Correct</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-green-600 mb-4">atheist</div>
            <p className="text-lg md:text-xl text-green-700">This is the correct spelling of the word meaning a person who does not believe in God or gods.</p>
          </div>
        </Card>
      </div>

      {/* Definition Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Atheist (noun)</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A person who does not believe in the existence of God or gods. Someone who rejects or lacks belief in 
              the existence of deities.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Examples:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg md:text-xl text-gray-700">
              <li>She identifies as an <strong>atheist</strong> and doesn&apos;t believe in any gods.</li>
              <li>The <strong>atheist</strong> community organized a secular event.</li>
              <li>Many <strong>atheists</strong> prefer to keep their beliefs private.</li>
              <li>He became an <strong>atheist</strong> after years of questioning his faith.</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Why the Confusion */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Why the Confusion?</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            The confusion between &quot;atheist&quot; and &quot;athiest&quot; likely stems from:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Phonetic similarity:</strong> Both spellings would sound similar when pronounced</li>
            <li><strong>Common misspelling:</strong> Many people transpose the &quot;i&quot; and &quot;e&quot;</li>
            <li><strong>Inconsistent English spelling rules:</strong> Some words do have &quot;ie&quot; instead of &quot;ei&quot;</li>
            <li><strong>Lack of exposure:</strong> Not seeing the correct spelling frequently enough</li>
            <li><strong>Typographical errors:</strong> Transposing letters when typing quickly</li>
            <li><strong>Influence from other words:</strong> Words like &quot;believe&quot; have &quot;ie&quot;</li>
          </ul>
        </div>
      </Card>

      {/* Grammar Rules */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Grammar Rules</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            <strong>Spelling rule:</strong> The word &quot;atheist&quot; comes from the Greek word &quot;atheos&quot; meaning &quot;without god&quot; 
            and follows the &quot;ei&quot; spelling pattern.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-900">Related words:</h4>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li><strong>atheism</strong> (noun)</li>
              <li><strong>atheistic</strong> (adjective)</li>
              <li><strong>atheistically</strong> (adverb)</li>
              <li><strong>agnostic</strong> (related concept)</li>
            </ul>
          </div>
          <p className="mt-4">
            <strong>Note:</strong> All related words follow the same &quot;ei&quot; spelling pattern.
          </p>
        </div>
      </Card>

      {/* Synonyms */}
      <Card className="mb-8 p-6 bg-blue-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Atheist&quot;</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl">
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Formal:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>nonbeliever</li>
              <li>secularist</li>
              <li>freethinker</li>
              <li>rationalist</li>
              <li>humanist</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Informal:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>non-religious person</li>
              <li>godless person</li>
              <li>secular person</li>
              <li>unbeliever</li>
              <li>skeptic</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Notes */}
      <Card className="mb-8 p-6">
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>Use &quot;atheist&quot; when referring to someone who doesn&apos;t believe in God or gods</li>
            <li>Remember that &quot;atheist&quot; uses &quot;ei&quot; not &quot;ie&quot;</li>
            <li>Common contexts include religious discussions, philosophy, and personal beliefs</li>
            <li>The word &quot;atheist&quot; is a noun that describes a person&apos;s belief system</li>
            <li>Always spell it as &quot;atheist&quot; not &quot;athiest&quot;</li>
            <li>Think of it as &quot;a&quot; + &quot;theist&quot; to remember the spelling</li>
          </ul>
        </div>
      </Card>

      {/* FAQ Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is &quot;athiest&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: No, &quot;athiest&quot; is never correct in standard English. The correct spelling is always &quot;atheist.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What&apos;s the difference between an atheist and an agnostic?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: An atheist believes that God does not exist, while an agnostic believes that the existence of God 
              cannot be known or proven.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Remember that &quot;atheist&quot; uses &quot;ei&quot; not &quot;ie.&quot; Think of it as &quot;a&quot; + &quot;theist&quot; 
              or use the mnemonic: &quot;An atheist says &apos;ei&apos; to God.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is this a common spelling mistake?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, this is a very common spelling mistake. Many people transpose the &quot;i&quot; and &quot;e&quot; 
              when writing &quot;atheist,&quot; making it one of the most frequently misspelled words in English.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What about the adjective form?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: The adjective form is &quot;atheistic&quot; and it also follows the same &quot;ei&quot; spelling pattern.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is &quot;atheist&quot; a negative term?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: &quot;Atheist&quot; is a neutral descriptive term. It simply describes someone who doesn&apos;t believe in God, 
              without any inherent positive or negative connotation.
            </p>
          </div>
        </div>
      </Card>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>&quot;Atheist&quot;</strong> is the correct spelling of the word meaning a person who does not believe in God or gods. 
          The spelling &quot;athiest&quot; is incorrect and should never be used. Remember that &quot;atheist&quot; uses &quot;ei&quot; 
          not &quot;ie&quot; and comes from the Greek word &quot;atheos&quot; meaning &quot;without god.&quot; This is one of the most 
          commonly misspelled words in English, so it&apos;s important to remember the correct spelling pattern.
        </p>
      </div>
    </div>
  )
} 