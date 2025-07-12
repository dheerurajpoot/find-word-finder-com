import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ancient vs Acient - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "ancient" and "acient". Discover the proper spelling, definitions, examples, and common usage tips.',
  keywords: 'ancient, acient, spelling, correct spelling, word comparison, English spelling',
  openGraph: {
    title: 'Ancient vs Acient - Which is Correct?',
    description: 'Learn the correct spelling between "ancient" and "acient". Discover the proper spelling, definitions, examples, and common usage tips.',
    type: 'website',
  },
}

export default function AncientVsAcientPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Ancient vs Acient</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700">
          Understanding the correct spelling of this commonly misspelled word and how to use it properly in your writing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Correct: Ancient
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            <strong>Definition:</strong> Belonging to the very distant past; very old; having existed for a very long time.
          </p>
          <p className="text-lg md:text-xl text-green-800">
            <strong>Pronunciation:</strong> /ˈeɪnʃənt/ (AYN-shuhnt)
          </p>
        </div>

        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Incorrect: Acient
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            <strong>Why it&apos;s wrong:</strong> Missing the &quot;n&quot; in the spelling.
          </p>
          <p className="text-lg md:text-xl text-red-800">
            <strong>Common mistake:</strong> People often drop the &quot;n&quot; when typing quickly.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition &amp; Meaning</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Ancient</strong> refers to something that belongs to the very distant past, is very old, or has existed for a very long time. It can describe civilizations, artifacts, traditions, or anything from the remote past.
          </p>
          <p>
            The word comes from the Latin &quot;antiquus,&quot; meaning &quot;old.&quot; The &quot;n&quot; is essential to the correct spelling and pronunciation.
          </p>
        </div>
      </div>

      <div className="bg-purple-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-900">Examples in Sentences</h2>
        <div className="text-lg md:text-xl text-purple-800 space-y-4">
          <p><strong>Correct usage:</strong></p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>The archaeologists discovered <strong>ancient</strong> ruins in the desert.</li>
            <li>She studied <strong>ancient</strong> Greek philosophy in college.</li>
            <li>The <strong>ancient</strong> temple was over 2,000 years old.</li>
            <li>This <strong>ancient</strong> tradition has been passed down for generations.</li>
          </ul>
        </div>
      </div>

      <div className="bg-indigo-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-indigo-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-indigo-800">
          <div>
            <h3 className="font-semibold mb-2">For &quot;very old&quot;:</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Antique</li>
              <li>Vintage</li>
              <li>Archaic</li>
              <li>Primitive</li>
              <li>Prehistoric</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">For &quot;from the past&quot;:</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Historical</li>
              <li>Traditional</li>
              <li>Time-honored</li>
              <li>Classical</li>
              <li>Bygone</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>Remember the &quot;n&quot; in ancient - think of it as &quot;an-cient&quot;</li>
          <li>The word is related to &quot;antique&quot; and &quot;antiquity&quot;</li>
          <li>Common misspellings include: acient, anceint, anceint</li>
          <li>This is often a typing error rather than a spelling confusion</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Why do people misspell &quot;ancient&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">This is often a typing error where people accidentally skip the &quot;n&quot; when typing quickly, rather than a spelling confusion.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Is &quot;acient&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;acient&quot; is always incorrect. The proper spelling always includes the &quot;n.&quot;</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">Think of the word as &quot;an-cient&quot; - break it down into syllables to remember the &quot;n.&quot;</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-3">
          <p>
            <strong>Ancient</strong> is the correct spelling, featuring an &quot;n&quot; that is essential to the word&apos;s proper form. This word refers to something that belongs to the very distant past or is very old.
          </p>
          <p>
            The misspelling <strong>acient</strong> (missing the &quot;n&quot;) is incorrect and should be avoided in all formal writing contexts.
          </p>
          <p>
            Remember: Ancient has an &quot;n&quot; - think of it as &quot;an-cient&quot; to help you spell it correctly every time.
          </p>
        </div>
      </div>
    </div>
  )
} 