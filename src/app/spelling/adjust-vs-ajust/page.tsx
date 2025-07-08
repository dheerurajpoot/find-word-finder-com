import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Adjust or Ajust - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;adjust&quot; and &quot;ajust&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AdjustVsAjustPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Adjust or Ajust
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between Adjust or Ajust these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Ajust</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Ajust&quot; is a misspelling. The correct spelling has a &apos;d&apos; after the &apos;j&apos;.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Adjust</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Adjust&quot; is the correct spelling. It means to alter or modify slightly.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Adjust</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Adjust</strong> (verb): To alter or move something slightly in order to achieve the desired fit, appearance, or result; to adapt or become accustomed to new circumstances; to regulate or fine-tune.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• Please <strong>adjust</strong> the temperature on the thermostat.</li>
              <li>• She had to <strong>adjust</strong> to the new work schedule.</li>
              <li>• The mechanic <strong>adjusted</strong> the car&apos;s brakes.</li>
              <li>• He <strong>adjusted</strong> his tie before the meeting.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Adjust</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Modify</li>
                <li>• Alter</li>
                <li>• Change</li>
                <li>• Adapt</li>
                <li>• Regulate</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Fine-tune</li>
                <li>• Calibrate</li>
                <li>• Correct</li>
                <li>• Fix</li>
                <li>• Align</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Notes */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Adjust</strong> is spelled with a &apos;d&apos; after the &apos;j&apos;, not without it.</li>
            <li>• It&apos;s commonly used in mechanical, technical, and everyday contexts.</li>
            <li>• Often used with &quot;to&quot; (adjust to something).</li>
            <li>• Can be used as both a transitive and intransitive verb.</li>
            <li>• The word comes from the Old French &quot;ajuster&quot; meaning &quot;to arrange.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;ajust&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;ajust&quot; is never correct. The proper spelling is always &quot;adjust&quot; with a &apos;d&apos; after the &apos;j&apos;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;adjust&quot; as being related to &quot;just&quot; - both have a &apos;d&apos; and relate to correctness or precision. The word means to make something just right, so it follows the same pattern.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;adjust&quot; and &quot;adapt&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Adjust&quot; implies making small changes or fine-tuning something, while &quot;adapt&quot; suggests more significant changes to fit new circumstances. &quot;Adjust&quot; is about modification, while &quot;adapt&quot; is about transformation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;adjust&quot; be used in technical contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Adjust&quot; is commonly used in technical, mechanical, and scientific contexts. For example: &quot;Adjust the microscope focus&quot; or &quot;Adjust the engine timing.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;adjust&quot; related to &quot;adjustment&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Adjust&quot; is the verb form, while &quot;adjustment&quot; is the noun form. Both words share the same root and correct spelling pattern with a &apos;d&apos; after the &apos;j&apos;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;ajust&quot; likely occurs because people may not hear the &apos;d&apos; sound clearly in pronunciation, or they might think it follows a simpler spelling pattern without the &apos;d&apos;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;adjust&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: adjust to, adjust for, adjust the settings, adjust the volume, adjust the temperature, and adjust to change. The word is often used in contexts involving fine-tuning or modification.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;adjust&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;adjust&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, business, and professional contexts to describe modification or fine-tuning.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Adjust</strong> is the correct spelling with a &apos;d&apos; after the &apos;j&apos;. It means to alter or modify something slightly to achieve the desired result. The misspelling &quot;ajust&quot; without the &apos;d&apos; is never correct. Use this word when you want to describe making small changes or fine-tuning something.
        </p>
      </div>
    </div>
  )
} 