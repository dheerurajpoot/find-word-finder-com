import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Ancestor or Ancester - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;ancestor&quot; and &quot;ancester&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AncestorVsAncesterPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Ancestor or Ancester</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;ancestor&quot; and &quot;ancester&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Ancester</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Ancester&quot; is a misspelling. The correct spelling is &quot;ancestor&quot; with an &quot;o&quot; after the &quot;t&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Ancestor</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Ancestor&quot; is the correct spelling. It means a person from whom one is descended, typically one more remote than a grandparent.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Ancestor (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A person from whom one is descended, typically one more remote than a grandparent.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She researched her family tree to learn about her <strong>ancestors</strong>.</li>
                  <li>• Our <strong>ancestors</strong> migrated from Europe centuries ago.</li>
                  <li>• The traditions were passed down from <strong>ancestor</strong> to descendant.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Ancester (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Ancester&quot; is a misspelling of &quot;ancestor&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Ancester&quot; is not used in standard English.</li>
                  <li>• Always use <strong>ancestor</strong> when referring to a person from whom one is descended.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Ancestor:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Forebear</li>
                <li>• Forefather</li>
                <li>• Predecessor</li>
                <li>• Progenitor</li>
                <li>• Forerunner</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Ancester:</h4>
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
            <li>• <strong>Ancestor</strong> is spelled with an &quot;o&quot; after the &quot;t&quot;.</li>
            <li>• Used to describe a person from whom one is descended.</li>
            <li>• The word comes from Latin &quot;antecessor&quot; meaning &quot;one who goes before&quot;.</li>
            <li>• &quot;Ancester&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;ancester&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;ancester&quot; is never correct. The proper spelling is always &quot;ancestor.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the &quot;o&quot; after the &quot;t&quot; in &quot;ancestor.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does ancestor mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It means a person from whom one is descended, typically one more remote than a grandparent.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;ancester&quot; occurs because people use the phonetic spelling or forget the &quot;o&quot; after the &quot;t&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Ancestor</strong> is the correct spelling with an &quot;o&quot; after the &quot;t&quot;. It means a person from whom one is descended, typically one more remote than a grandparent. The misspelling &quot;ancester&quot; is never correct. Use &quot;ancestor&quot; for all references to family lineage.</p>
      </div>
    </div>
  )
} 