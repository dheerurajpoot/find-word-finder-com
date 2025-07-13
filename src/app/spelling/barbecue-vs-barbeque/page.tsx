import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Barbecue vs Barbeque - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "barbecue" and "barbeque". Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'barbecue, barbeque, BBQ, spelling, correct spelling, word comparison, English spelling',
  openGraph: {
    title: 'Barbecue vs Barbeque - Which is Correct?',
    description: 'Learn the correct spelling between "barbecue" and "barbeque". Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BarbecueVsBarbequePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Barbecue vs Barbeque</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of this cooking method and social gathering term.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Barbeque
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. "Barbeque" is a misspelling of the word "barbecue."
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• We&apos;re having a barbeque this weekend</li>
              <li>• Barbeque sauce is delicious</li>
              <li>• The barbeque grill needs cleaning</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Barbecue
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. "Barbecue" is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• We&apos;re having a barbecue this weekend</li>
              <li>• Barbecue sauce is delicious</li>
              <li>• The barbecue grill needs cleaning</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Barbecue</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Barbecue</strong> (noun): A method of cooking meat, fish, or vegetables over an open fire or hot coals, typically outdoors.
          </p>
          <p>
            <strong>Barbecue</strong> (verb): To cook food using this method, or to host a social gathering where food is cooked this way.
          </p>
          <p>
            The term also refers to the social event itself, often involving outdoor cooking and dining with family and friends.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Barbecue</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• BBQ</li>
              <li>• Grill</li>
              <li>• Cookout</li>
              <li>• Braai (South Africa)</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Roast</li>
              <li>• Smoke</li>
              <li>• Outdoor cooking</li>
              <li>• Backyard party</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Barbecue&quot; is the standard English spelling</li>
          <li>• The word comes from Spanish &quot;barbacoa&quot; and ultimately from Taino &quot;barbakoa&quot;</li>
          <li>• &quot;BBQ&quot; is an acceptable abbreviation in informal contexts</li>
          <li>• The pronunciation is /ˈbɑːrbɪkjuː/ (BAR-bi-kyoo)</li>
          <li>• Regional variations exist in cooking styles and terminology</li>
          <li>• &quot;Barbeque&quot; is a common misspelling but should be avoided in formal writing</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;barbeque&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling likely occurs because the &quot;c&quot; sound in &quot;barbecue&quot; can be subtle, and some people hear it as &quot;barbeque&quot; when spoken quickly.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;barbeque&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;barbeque&quot; is always incorrect. Always use &quot;barbecue&quot; in formal and informal writing.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between barbecue and grilling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Barbecue typically involves slow cooking over low heat with smoke, while grilling is cooking over high heat for a shorter time. However, the terms are often used interchangeably.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Barbecue</strong> is the correct spelling of this cooking method and social event. The incorrect spelling &quot;barbeque&quot; should never be used.
          </p>
          <p>
            Remember: Barbecue = Bar + be + cue (with a &quot;c&quot; before the &quot;ue&quot;). This spelling is consistent across all English-speaking countries and is the standard in dictionaries and formal writing.
          </p>
        </div>
      </div>
    </div>
  )
} 