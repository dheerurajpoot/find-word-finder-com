import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Burial or Burrial - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;burial&quot; and &quot;burrial&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BurialVsBurrialPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Burial or Burrial</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;burial&quot; and &quot;burrial&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Burrial</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Burrial&quot; is a misspelling. The correct spelling is &quot;burial&quot; with one &quot;r&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Burial</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Burial&quot; is the correct spelling. It refers to the act of burying a dead body.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Burial (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The act or ceremony of burying a dead body in the ground.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>burial</strong> service was held at the cemetery.</li>
                  <li>• They chose a traditional <strong>burial</strong> over cremation.</li>
                  <li>• The <strong>burial</strong> took place on a sunny afternoon.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Burrial (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Burrial&quot; is a misspelling of &quot;burial&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Burrial&quot; is not used in standard English.</li>
                  <li>• Always use <strong>burial</strong> when referring to burying the dead.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Burial:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Interment</li>
                <li>• Funeral</li>
                <li>• Inhumation</li>
                <li>• Entombment</li>
                <li>• Laying to rest</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Burrial:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Burial</strong> is spelled with one &quot;r&quot;, not two.</li>
            <li>• The word comes from the Old English &quot;byrgels&quot; meaning grave or tomb.</li>
            <li>• &quot;Burial&quot; can refer to both the act and the ceremony of burying.</li>
            <li>• &quot;Burrial&quot; is never correct in any context.</li>
            <li>• The pronunciation is /ˈberiəl/ with emphasis on the first syllable.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;burrial&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;burrial&quot; is never correct. The proper spelling is always &quot;burial.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;bury-al&quot; - from the verb &quot;bury&quot; plus the suffix &quot;-al.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between burial and funeral?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: A funeral is the ceremony or service, while burial specifically refers to placing the body in the ground.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can burial be used in plural form?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;burials&quot; is the correct plural form of burial.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;burrial&quot; likely occurs because of confusion about the double &quot;r&quot; or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;burial&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: burial ground, burial site, burial service, burial plot, and burial at sea.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can burial be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;burial&quot; is a noun. The verb form is &quot;bury.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is burial always about human remains?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: While commonly used for human remains, &quot;burial&quot; can also refer to burying objects or animals.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Burial</strong> is the correct spelling with one &quot;r&quot;. It refers to the act or ceremony of burying a dead body in the ground. The misspelling &quot;burrial&quot; is never correct. Use &quot;burial&quot; for all contexts involving the interment of remains or the burial ceremony.</p>
      </div>
    </div>
  )
} 