import { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Attach vs Attatch - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling between "attach" and "attatch". Discover the proper usage, definitions, and common mistakes to avoid.',
}

export default function AttachVsAttatchPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Attach or Attatch</h1>
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
            <div className="text-6xl font-bold text-red-600 mb-4">attatch</div>
            <p className="text-lg md:text-xl text-red-700">This spelling is incorrect and should not be used.</p>
          </div>
        </Card>

        <Card className="border-2 border-green-200 bg-green-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">✅</span>
            <h2 className="text-2xl font-bold text-green-800">Correct</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-green-600 mb-4">attach</div>
            <p className="text-lg md:text-xl text-green-700">This is the correct spelling of the verb meaning to fasten, join, or connect.</p>
          </div>
        </Card>
      </div>

      {/* Definition Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Attach (verb)</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              To fasten, join, or connect one thing to another. To add or affix something. To be associated or connected with.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Examples:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg md:text-xl text-gray-700">
              <li>Please <strong>attach</strong> the file to your email.</li>
              <li>The label is <strong>attached</strong> to the package.</li>
              <li>He <strong>attached</strong> great importance to honesty.</li>
              <li>The trailer was <strong>attached</strong> to the car.</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Why the Confusion */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Why the Confusion?</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            The confusion between &quot;attach&quot; and &quot;attatch&quot; likely stems from:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Phonetic similarity:</strong> Both spellings would sound similar when pronounced</li>
            <li><strong>Common misspelling:</strong> Many people add an extra &quot;t&quot; when spelling the word</li>
            <li><strong>Inconsistent English spelling rules:</strong> Some words do have double consonants</li>
            <li><strong>Lack of exposure:</strong> Not seeing the correct spelling frequently enough</li>
            <li><strong>Typographical errors:</strong> Adding extra letters when typing quickly</li>
            <li><strong>Influence from other words:</strong> Words like &quot;attaché&quot; have double consonants</li>
          </ul>
        </div>
      </Card>

      {/* Grammar Rules */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Grammar Rules</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            <strong>Spelling rule:</strong> The word &quot;attach&quot; comes from the Old French &quot;atachier&quot; and follows the standard English spelling pattern with a single &quot;t&quot; before &quot;ach.&quot;
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-900">Related words:</h4>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li><strong>attached</strong> (past tense)</li>
              <li><strong>attaching</strong> (present participle)</li>
              <li><strong>attachment</strong> (noun)</li>
              <li><strong>attachable</strong> (adjective)</li>
            </ul>
          </div>
          <p className="mt-4">
            <strong>Note:</strong> All related words follow the same spelling pattern with a single &quot;t&quot; before &quot;ach.&quot;
          </p>
        </div>
      </Card>

      {/* Synonyms */}
      <Card className="mb-8 p-6 bg-blue-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Attach&quot;</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl">
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Physical:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>fasten</li>
              <li>join</li>
              <li>connect</li>
              <li>affix</li>
              <li>secure</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">General:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>add</li>
              <li>include</li>
              <li>enclose</li>
              <li>link</li>
              <li>tie</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Notes */}
      <Card className="mb-8 p-6">
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>Use &quot;attach&quot; when referring to fastening, joining, or connecting</li>
            <li>Remember that &quot;attach&quot; uses a single &quot;t&quot; before &quot;ach&quot;</li>
            <li>Common contexts include emails, packages, and physical connections</li>
            <li>The word &quot;attach&quot; can refer to both physical and figurative connections</li>
            <li>Always spell it as &quot;attach&quot; not &quot;attatch&quot;</li>
            <li>Think of it as &quot;at&quot; + &quot;ach&quot; to remember the spelling</li>
          </ul>
        </div>
      </Card>

      {/* FAQ Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is &quot;attatch&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: No, &quot;attatch&quot; is never correct in standard English. The correct spelling is always &quot;attach.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What&apos;s the difference between &quot;attach&quot; and &quot;affix&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Both mean to fasten or join, but &quot;attach&quot; is more general, while &quot;affix&quot; often means to stick or glue.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Remember that &quot;attach&quot; uses a single &quot;t&quot; before &quot;ach.&quot; Think of it as &quot;at&quot; + &quot;ach&quot; 
              or use the mnemonic: &quot;Attach has one &apos;t&apos; for &apos;tie&apos;.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is this a common spelling mistake?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, this is a common spelling mistake. Many people add an extra &quot;t&quot; when writing &quot;attach,&quot; 
              especially when typing quickly or relying on phonetic spelling.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Can &quot;attach&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, &quot;attach&quot; can be used in various contexts including emails, packages, physical connections, 
              and figurative associations.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What about the noun form?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: The noun form is &quot;attachment&quot; and it also follows the same spelling pattern with a single &quot;t&quot; before &quot;ach.&quot;
            </p>
          </div>
        </div>
      </Card>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>&quot;Attach&quot;</strong> is the correct spelling of the verb meaning to fasten, join, or connect. 
          The spelling &quot;attatch&quot; is incorrect and should never be used. Remember that &quot;attach&quot; uses a single &quot;t&quot; before &quot;ach&quot; 
          and comes from the Old French &quot;atachier.&quot; This is a common spelling mistake, so it&apos;s important to remember 
          the correct spelling pattern.
        </p>
      </div>
    </div>
  )
} 