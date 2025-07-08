import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Alumni or Alumini - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;alumni&quot; and &quot;alumini&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AlumniVsAluminiPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Alumni or Alumini</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;alumni&quot; and &quot;alumini&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Alumini</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Alumini&quot; is a misspelling. The correct spelling is &quot;alumni&quot; with &quot;ni&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Alumni</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Alumni&quot; is the correct spelling. It means graduates or former students of a school, college, or university.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Alumni (noun, plural):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Graduates or former students of a school, college, or university; the plural form of alumnus.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>alumni</strong> association organized the event.</li>
                  <li>• Many <strong>alumni</strong> returned for homecoming.</li>
                  <li>• The university&apos;s <strong>alumni</strong> are very successful.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Alumini (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Alumini&quot; is a misspelling of &quot;alumni&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Alumini&quot; is not used in standard English.</li>
                  <li>• Always use <strong>alumni</strong> when referring to graduates.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Alumni:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Graduates</li>
                <li>• Former students</li>
                <li>• Ex-students</li>
                <li>• Old boys/girls</li>
                <li>• Former pupils</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Alumini:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Alumni</strong> is spelled with &quot;ni&quot; at the end, not &quot;ni.&quot;</li>
            <li>• Used to refer to graduates or former students of an institution.</li>
            <li>• Can refer to both male and female graduates collectively.</li>
            <li>• The word comes from Latin &quot;alumnus&quot; meaning &quot;foster son.&quot;</li>
            <li>• &quot;Alumini&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;alumini&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;alumini&quot; is never correct. The proper spelling is always &quot;alumni.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;alum-ni&quot; - it ends with &quot;ni&quot; like the word &quot;mini.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between alumnus and alumni?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Alumnus&quot; refers to one male graduate, while &quot;alumni&quot; is the plural form for multiple graduates or mixed groups.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can alumni refer to female graduates?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;alumni&quot; can refer to both male and female graduates collectively, though &quot;alumnae&quot; is specifically for females.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;alumni&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: alumni association, alumni network, alumni reunion, and alumni directory.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;alumini&quot; occurs because people think it should have an extra &quot;i&quot; or different ending pattern.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can alumni be used for any type of school?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;alumni&quot; can be used for graduates of any educational institution, from elementary schools to universities.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is alumni always plural?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;alumni&quot; is always plural. For a single male graduate, use &quot;alumnus,&quot; and for a single female graduate, use &quot;alumna.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Alumni</strong> is the correct spelling with &quot;ni&quot; at the end. It means graduates or former students of an educational institution. The misspelling &quot;alumini&quot; is never correct. Use &quot;alumni&quot; to refer to graduates collectively.</p>
      </div>
    </div>
  )
} 