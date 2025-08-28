import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Recipes vs Recipies - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;recipes&quot; and &quot;recipies&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RecipesVsRecipiesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Recipes vs Recipies
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t spoil your cooking with bad spelling! Learn the correct way to spell the plural of &quot;recipe.&quot;
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-green-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-green-700">
          <strong>&quot;Recipes&quot;</strong> is the correct spelling. &quot;Recipies&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Recipies</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-green-700 mb-3">✅ Correct: Recipes</h3>
            <p className="text-green-600">This is the proper spelling that means &quot;instructions for preparing food dishes.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-green-100 to-emerald-100">
            <h3 className="text-lg font-bold text-green-800 mb-3">📚 Correct Word</h3>
            <p className="text-green-700">
              <strong>Recipes</strong> is the plural form of &quot;recipe,&quot; referring to multiple sets of cooking instructions.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Recipies</strong> is a misspelling that often occurs due to confusion about pluralization rules.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-green-100 to-emerald-100">
            <h3 className="text-lg font-bold text-green-800 mb-3">🔍 Etymology</h3>
            <p className="text-green-700">
              From Latin <em>recipere</em>, meaning &quot;to take.&quot; The plural follows standard English rules: &quot;recipe&quot; + &quot;s.&quot;
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Examples */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-2xl font-bold text-green-800 mb-4">✅ Correct Usage</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4 rounded-r-lg">
              <p className="text-green-700">I have many <strong>recipes</strong> for chocolate cake.</p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4 rounded-r-lg">
              <p className="text-green-700">These <strong>recipes</strong> have been passed down for generations.</p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4 rounded-r-lg">
              <p className="text-green-700">The cookbook contains over 100 <strong>recipes</strong>.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">I have many <strong>recipies</strong> for chocolate cake. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">These <strong>recipies</strong> have been passed down for generations. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The cookbook contains over 100 <strong>recipies</strong>. <span className="text-red-500">(Incorrect)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-green-100 to-emerald-100">
              <h3 className="text-lg font-bold text-green-800 mb-3">🎯 Simple Plural Rule</h3>
              <p className="text-green-700">Most English words just add &quot;s&quot; to make them plural - &quot;recipe&quot; becomes &quot;recipes&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-green-100 to-emerald-100">
              <h3 className="text-lg font-bold text-green-800 mb-3">🔤 Think &quot;Recipe&quot;</h3>
              <p className="text-green-700">Start with the singular &quot;recipe&quot; and just add &quot;s&quot; - no need to change the spelling!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-green-100 to-emerald-100">
              <h3 className="text-lg font-bold text-green-800 mb-3">📝 Visual Check</h3>
              <p className="text-green-700">Remember: &quot;recipe&quot; + &quot;s&quot; = &quot;recipes&quot; - keep it simple!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-green-100 to-emerald-100">
              <h3 className="text-lg font-bold text-green-800 mb-3">🎨 Pattern Recognition</h3>
              <p className="text-green-700">Words ending in &quot;e&quot; usually just add &quot;s&quot; for plural: &quot;cake&quot; → &quot;cakes,&quot; &quot;recipe&quot; → &quot;recipes.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage Patterns */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl mb-10">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">🚀 Advanced Usage Patterns</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-green-700 mb-4">Common Phrases</h3>
            <div className="space-y-2">
              <p className="text-green-600">• Family <strong>recipes</strong></p>
              <p className="text-green-600">• Secret <strong>recipes</strong></p>
              <p className="text-green-600">• Traditional <strong>recipes</strong></p>
              <p className="text-green-600">• Favorite <strong>recipes</strong></p>
              <p className="text-green-600">• Cooking <strong>recipes</strong></p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-green-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-green-600">• <strong>Plural Noun:</strong> The recipes are delicious</p>
              <p className="text-green-600">• <strong>Subject:</strong> These recipes require skill</p>
              <p className="text-green-600">• <strong>Object:</strong> I love these recipes</p>
              <p className="text-green-600">• <strong>Possessive:</strong> The recipes&apos; origins</p>
              <p className="text-green-600">• <strong>Countable:</strong> Five recipes</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-800 mb-2">Why do people misspell &quot;recipes&quot; as &quot;recipies&quot;?</h3>
              <p className="text-gray-700">This often happens due to confusion about pluralization rules or phonetic confusion when writing quickly.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-800 mb-2">Is &quot;recipies&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;recipies&quot; is never correct in formal or informal writing. It should always be spelled as &quot;recipes.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-800 mb-2">What&apos;s the difference between &quot;recipe&quot; and &quot;recipes&quot;?</h3>
              <p className="text-gray-700">&quot;Recipe&quot; is singular (one set of instructions), while &quot;recipes&quot; is plural (multiple sets of instructions).</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-800 mb-2">Can &quot;recipes&quot; be used as a verb?</h3>
              <p className="text-gray-700">No, &quot;recipes&quot; is only a noun. The verb form would be &quot;to cook&quot; or &quot;to prepare.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of the singular &quot;recipe&quot; and just add &quot;s&quot; - it&apos;s that simple! No need to change the spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-800 mb-2">Is &quot;recipes&quot; related to &quot;recipient&quot;?</h3>
              <p className="text-gray-700">While they sound similar, they have different origins. &quot;Recipe&quot; comes from Latin &quot;recipere,&quot; while &quot;recipient&quot; comes from &quot;recipiens.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-800 mb-2">What&apos;s the singular form of &quot;recipes&quot;?</h3>
              <p className="text-gray-700">The singular form is &quot;recipe.&quot; For example: &quot;This recipe is my favorite.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-800 mb-2">Can &quot;recipes&quot; be used for things other than food?</h3>
              <p className="text-gray-700">Yes, &quot;recipe&quot; can also refer to a method or procedure for achieving something, like &quot;a recipe for success.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-800 mb-2">What&apos;s the origin of the word &quot;recipe&quot;?</h3>
              <p className="text-gray-700">It comes from Latin &quot;recipere,&quot; meaning &quot;to take&quot; or &quot;to receive,&quot; originally referring to medical prescriptions.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-800 mb-2">How common is the misspelling &quot;recipies&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially in informal writing and when people are typing quickly without checking.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Recipes&quot;</strong> is just &quot;recipe&quot; + &quot;s&quot; - keep it simple!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> Most English words ending in &quot;e&quot; just add &quot;s&quot; for plural - no need to change the spelling!
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-green-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/recipe-vs-resipe" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Resipe</a></p>
            <p><a href="/spelling/recipe-vs-recipie" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Recipie</a></p>
            <p><a href="/spelling/recipe-vs-recepie" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Recepie</a></p>
            <p><a href="/spelling/recipe-vs-receipe" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Receipe</a></p>
            <p><a href="/spelling/recipient-vs-recepient" className="text-blue-700 hover:text-blue-900 underline">Recipient vs Recepient</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-green-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/cookies-vs-cookys" className="text-blue-700 hover:text-blue-900 underline">Cookies vs Cookys</a></p>
            <p><a href="/spelling/cakes-vs-caks" className="text-blue-700 hover:text-blue-900 underline">Cakes vs Caks</a></p>
            <p><a href="/spelling/breads-vs-breds" className="text-blue-700 hover:text-blue-900 underline">Breads vs Breds</a></p>
            <p><a href="/spelling/pies-vs-pys" className="text-blue-700 hover:text-blue-900 underline">Pies vs Pys</a></p>
            <p><a href="/spelling/soups-vs-sups" className="text-blue-700 hover:text-blue-900 underline">Soups vs Sups</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-green-800 mb-4 text-center">📚 Learned Grammar</h3>
          <div className="space-y-2">
            <p><a href="/grammar/pluralization" className="text-blue-700 hover:text-blue-900 underline">Pluralization</a></p>
            <p><a href="/grammar/nouns" className="text-blue-700 hover:text-blue-900 underline">Nouns</a></p>
            <p><a href="/grammar/spelling-rules" className="text-blue-700 hover:text-blue-900 underline">Spelling Rules</a></p>
            <p><a href="/grammar/latin-origins" className="text-blue-700 hover:text-blue-900 underline">Latin Origins</a></p>
            <p><a href="/grammar/word-formation" className="text-blue-700 hover:text-blue-900 underline">Word Formation</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
