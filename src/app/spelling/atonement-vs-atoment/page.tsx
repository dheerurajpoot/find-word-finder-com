import { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Atonement vs Atoment - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling between "atonement" and "atoment". Discover the proper usage, definitions, and common mistakes to avoid.',
}

export default function AtonementVsAtomentPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Atonement or Atoment</h1>
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
            <div className="text-6xl font-bold text-red-600 mb-4">atoment</div>
            <p className="text-lg md:text-xl text-red-700">This spelling is incorrect and should not be used.</p>
          </div>
        </Card>

        <Card className="border-2 border-green-200 bg-green-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">✅</span>
            <h2 className="text-2xl font-bold text-green-800">Correct</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-green-600 mb-4">atonement</div>
            <p className="text-lg md:text-xl text-green-700">This is the correct spelling of the word meaning reparation for a wrong or injury.</p>
          </div>
        </Card>
      </div>

      {/* Definition Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Atonement (noun)</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              The action of making amends for a wrong or injury. In religious contexts, it refers to the reconciliation 
              between God and humankind through the sacrificial death of Jesus Christ.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Examples:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg md:text-xl text-gray-700">
              <li>He sought <strong>atonement</strong> for his past mistakes.</li>
              <li>The <strong>atonement</strong> of Jesus Christ is central to Christian theology.</li>
              <li>She made <strong>atonement</strong> by apologizing and making restitution.</li>
              <li>The Day of <strong>Atonement</strong> is an important Jewish holiday.</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Why the Confusion */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Why the Confusion?</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            The confusion between &quot;atonement&quot; and &quot;atoment&quot; likely stems from:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Phonetic similarity:</strong> Both spellings would sound similar when pronounced</li>
            <li><strong>Common misspelling:</strong> Many people drop the &quot;e&quot; when spelling the word</li>
            <li><strong>Inconsistent English spelling rules:</strong> Some words do have silent letters</li>
            <li><strong>Lack of exposure:</strong> Not seeing the correct spelling frequently enough</li>
            <li><strong>Typographical errors:</strong> Missing letters when typing quickly</li>
            <li><strong>Influence from other words:</strong> Words like &quot;moment&quot; don&apos;t have &quot;e&quot;</li>
          </ul>
        </div>
      </Card>

      {/* Grammar Rules */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Grammar Rules</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            <strong>Spelling rule:</strong> The word &quot;atonement&quot; comes from the phrase &quot;at one&quot; + &quot;-ment&quot; 
            and includes the letter &quot;e&quot; which is pronounced.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-900">Related words:</h4>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li><strong>atone</strong> (verb)</li>
              <li><strong>atoning</strong> (present participle)</li>
              <li><strong>atoned</strong> (past tense)</li>
              <li><strong>atoneable</strong> (adjective)</li>
            </ul>
          </div>
          <p className="mt-4">
            <strong>Note:</strong> All related words include the letter &quot;e&quot; and follow the same spelling pattern.
          </p>
        </div>
      </Card>

      {/* Synonyms */}
      <Card className="mb-8 p-6 bg-blue-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Atonement&quot;</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl">
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Formal:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>reparation</li>
              <li>amends</li>
              <li>redemption</li>
              <li>expiation</li>
              <li>reconciliation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Informal:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>making up</li>
              <li>apology</li>
              <li>compensation</li>
              <li>restitution</li>
              <li>penance</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Notes */}
      <Card className="mb-8 p-6">
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>Use &quot;atonement&quot; when referring to making amends for wrongs or religious reconciliation</li>
            <li>Remember that &quot;atonement&quot; includes the letter &quot;e&quot;</li>
            <li>Common contexts include religion, theology, personal relationships, and moral discussions</li>
            <li>The word &quot;atonement&quot; comes from &quot;at one&quot; meaning to be reconciled</li>
            <li>Always spell it as &quot;atonement&quot; not &quot;atoment&quot;</li>
            <li>Think of it as &quot;at one&quot; + &quot;ment&quot; to remember the spelling</li>
          </ul>
        </div>
      </Card>

      {/* FAQ Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is &quot;atoment&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: No, &quot;atoment&quot; is never correct in standard English. The correct spelling is always &quot;atonement.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What&apos;s the difference between &quot;atonement&quot; and &quot;apology&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: &quot;Atonement&quot; involves making amends or reparations for a wrong, while &quot;apology&quot; 
              is simply expressing regret or saying sorry.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Remember that &quot;atonement&quot; includes the letter &quot;e.&quot; Think of it as &quot;at one&quot; + &quot;ment&quot; 
              or use the mnemonic: &quot;Atonement has an &apos;e&apos; for &apos;ending&apos; conflicts.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is this a common spelling mistake?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, this is a common spelling mistake. Many people drop the &quot;e&quot; when writing &quot;atonement,&quot; 
              especially when typing quickly or relying on phonetic spelling.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Can &quot;atonement&quot; be used in secular contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, &quot;atonement&quot; can be used in secular contexts to refer to making amends or reparations 
              for any wrong or injury, not just religious contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What about the verb form?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: The verb form is &quot;atone&quot; and it also follows the same spelling pattern with the letter &quot;e.&quot;
            </p>
          </div>
        </div>
      </Card>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>&quot;Atonement&quot;</strong> is the correct spelling of the word meaning reparation for a wrong or injury, 
          or the reconciliation between God and humankind. The spelling &quot;atoment&quot; is incorrect and should never be used. 
          Remember that &quot;atonement&quot; includes the letter &quot;e&quot; and comes from the phrase &quot;at one&quot; + &quot;-ment.&quot; 
          This is a common spelling mistake, so it&apos;s important to remember the correct spelling pattern.
        </p>
      </div>
    </div>
  )
} 