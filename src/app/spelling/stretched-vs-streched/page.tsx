import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Stretched vs Streched - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;stretched&quot; and &quot;streched&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function StretchedVsStrechedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Stretched vs Streched
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 p-8 rounded-2xl mb-10 border border-emerald-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🧘</span>
            <span className="text-2xl font-bold text-green-600">&quot;Stretched&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Streched&quot; is incorrect - remember the &quot;t&quot; in &quot;stretched&quot;!
          </p>
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-red-50 to-red-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✗</span>
              </div>
              <h3 className="text-3xl font-bold text-red-800 mb-4">Streched</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is missing the &quot;t&quot; and is never acceptable in English.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-green-800 mb-4">Stretched</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;to have extended or expanded.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Stretched&quot;</strong> has a &quot;t&quot; in the middle. 
          <br />
          <strong>&quot;Streched&quot;</strong> is missing the &quot;t&quot; and is incorrect.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;STRETCH + ED&quot; - the &quot;t&quot; is essential!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/companies-vs-companys" className="text-blue-700 hover:text-blue-900 underline">Companies vs Companys</a></li>
            <li><a href="/spelling/slipped-vs-sliped" className="text-blue-700 hover:text-blue-900 underline">Slipped vs Sliped</a></li>
            <li><a href="/spelling/syphilis-vs-syphyllis" className="text-blue-700 hover:text-blue-900 underline">Syphilis vs Syphyllis</a></li>
            <li><a href="/spelling/because-vs-becase" className="text-blue-700 hover:text-blue-900 underline">Because vs Becase</a></li>
            <li><a href="/spelling/separate-vs-seperate" className="text-blue-700 hover:text-blue-900 underline">Separate vs Seperate</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/stopped-vs-stoped" className="text-purple-700 hover:text-purple-900 underline">Stopped vs Stoped</a></li>
            <li><a href="/spelling/planned-vs-planed" className="text-purple-700 hover:text-purple-900 underline">Planned vs Planed</a></li>
            <li><a href="/spelling/grabbed-vs-grabed" className="text-purple-700 hover:text-purple-900 underline">Grabbed vs Grabed</a></li>
            <li><a href="/spelling/occurred-vs-occured" className="text-purple-700 hover:text-purple-900 underline">Occurred vs Occured</a></li>
            <li><a href="/spelling/referred-vs-refered" className="text-purple-700 hover:text-purple-900 underline">Referred vs Refered</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/verb-tenses" className="text-green-700 hover:text-green-900 underline">Verb Tenses</a></li>
            <li><a href="/grammar/3rd-grade-worksheets-helping-verbs" className="text-green-700 hover:text-green-900 underline">Helping Verbs Worksheets</a></li>
            <li><a href="/grammar/4th-grade-worksheets-past-continuous-tense" className="text-green-700 hover:text-green-900 underline">Past Continuous Tense</a></li>
            <li><a href="/grammar/action-verbs" className="text-green-700 hover:text-green-900 underline">Action Verbs</a></li>
            <li><a href="/grammar/grammar-rules" className="text-green-700 hover:text-green-900 underline">Grammar Rules</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
