import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bled vs Bleeded - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bled&quot; and &quot;bleeded&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'bled, bleeded, spelling, correct spelling, word comparison, English spelling, verb, past tense',
  openGraph: {
    title: 'Bled vs Bleeded - Which is Correct?',
    description: 'Learn the correct spelling between &quot;bled&quot; and &quot;bleeded&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BledVsBleededPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Bled vs Bleeded</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of the past tense form of the verb &quot;bleed.&quot;
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Bleeded
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Bleeded&quot; is a misspelling of the word &quot;bled.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• He bleeded from the cut</li>
              <li>• The wound bleeded heavily</li>
              <li>• She bleeded for hours</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Bled
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Bled&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• He bled from the cut</li>
              <li>• The wound bled heavily</li>
              <li>• She bled for hours</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Bled</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Bled</strong> (verb): Past tense and past participle of &quot;bleed&quot; - to lose blood from the body, typically through a wound or injury.
          </p>
          <p>
            <strong>Bled</strong> (verb): To lose or drain something gradually, often used figuratively.
          </p>
          <p>
            Used to describe the loss of blood from the body or the gradual loss of resources, money, or other valuable things.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Bled</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Hemorrhaged</li>
              <li>• Lost blood</li>
              <li>• Drained</li>
              <li>• Leaked</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Seeped</li>
              <li>• Oozed</li>
              <li>• Flowed</li>
              <li>• Spilled</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Bled&quot; is the correct past tense form of &quot;bleed&quot;</li>
          <li>• The word &quot;bleed&quot; is an irregular verb: bleed → bled → bled</li>
          <li>• The pronunciation is /blɛd/ (BLED)</li>
          <li>• &quot;Bleeded&quot; is a common misspelling but is never correct</li>
          <li>• Irregular verbs don&apos;t follow the regular &quot;-ed&quot; pattern</li>
          <li>• Other irregular verbs include: feed → fed, lead → led, etc.</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;bleeded&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people apply the regular verb rule of adding &quot;-ed&quot; to form the past tense. However, &quot;bleed&quot; is an irregular verb that doesn&apos;t follow this pattern.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;bleeded&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;bleeded&quot; is always incorrect. Always use &quot;bled&quot; as the past tense of &quot;bleed.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;bled&quot; and &quot;bleeding&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Bled&quot; is the past tense (completed action), while &quot;bleeding&quot; is the present participle used in continuous tenses (ongoing action).
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Remember that &quot;bleed&quot; is an irregular verb: bleed → bled → bled. The past tense is always &quot;bled,&quot; never &quot;bleeded.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Bled</strong> is the correct spelling of the past tense of &quot;bleed.&quot; The incorrect spelling &quot;bleeded&quot; should never be used.
          </p>
          <p>
            Remember: Bleed is an irregular verb with the pattern bleed → bled → bled. The past tense is always &quot;bled,&quot; not &quot;bleeded,&quot; because irregular verbs don&apos;t follow the regular &quot;-ed&quot; pattern.
          </p>
        </div>
      </div>
    </div>
  )
} 