import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mapas',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'cultura',
    loadChildren: './cultura/cultura.module#CulturaPageModule'
  },
  {
    path: 'hoteles',
    loadChildren: './hoteles/hoteles.module#HotelesPageModule'
  },
  {
    path: 'comidas',
    loadChildren: './comidas/comidas.module#ComidasPageModule'
  },
  {
    path: 'galeria',
    loadChildren: './galeria/galeria.module#GaleriaPageModule'
  },
  {
    path: 'nocturna',
    loadChildren: './nocturna/nocturna.module#NocturnaPageModule'
  },
  {
    path: 'emergencias',
    loadChildren: './emergencias/emergencias.module#EmergenciasPageModule'
  },
  {
    path: 'instructivo',
    loadChildren: './instructivo/instructivo.module#InstructivoPageModule'
  },
  {
    path: 'dichosyrefranes',
    loadChildren: './dichosyrefranes/dichosyrefranes.module#DichosyrefranesPageModule'
  },
  {
    path: 'mitosyleyendas',
    loadChildren: './mitosyleyendas/mitosyleyendas.module#MitosyleyendasPageModule'
  },
  {
    path: 'monumentos',
    loadChildren: './monumentos/monumentos.module#MonumentosPageModule'
  },
  {
    path: 'calendario',
    loadChildren: './calendario/calendario.module#CalendarioPageModule'
  },
  {
    path: 'sanjuanero',
    loadChildren: './sanjuanero/sanjuanero.module#SanjuaneroPageModule'
  },
  {
    path: 'informaciongeneral',
    loadChildren: './informaciongeneral/informaciongeneral.module#InformaciongeneralPageModule'
  },
  {
    path: 'nuestrossimbolos',
    loadChildren: './nuestrossimbolos/nuestrossimbolos.module#NuestrossimbolosPageModule'
  },
  {
    path: 'directivosyfuncionarios',
    loadChildren: './directivosyfuncionarios/directivosyfuncionarios.module#DirectivosyfuncionariosPageModule'
  },
  {
    path: 'actividades',
    loadChildren: './actividades/actividades.module#ActividadesPageModule'
  },
  { 
    path: 'mapas', 
    loadChildren: './mapas/mapas.module#MapasPageModule' 
  },
  { 
    path: 'mapas2', 
    loadChildren: './mapas2/mapas2.module#Mapas2PageModule' 
  },
  { 
    path: 'mapas', 
    loadChildren: './mapas/mapas.module#MapasPageModule' 
  },
  { path: 'limitesmunicipio', loadChildren: './limitesmunicipio/limitesmunicipio.module#LimitesmunicipioPageModule' },
  { path: 'comunas', loadChildren: './comunas/comunas.module#ComunasPageModule' },
  { path: 'corregimientos', loadChildren: './corregimientos/corregimientos.module#CorregimientosPageModule' },
  { path: 'geografia', loadChildren: './geografia/geografia.module#GeografiaPageModule' },
  { path: 'bandera', loadChildren: './bandera/bandera.module#BanderaPageModule' },
  { path: 'escudo', loadChildren: './escudo/escudo.module#EscudoPageModule' },
  { path: 'monumentos/:id_monumentos', loadChildren: './monumentos-details/monumentos-details.module#MonumentosDetailsPageModule' },
  { path: 'policia', loadChildren: './policia/policia.module#PoliciaPageModule' },
  { path: 'video', loadChildren: './video/video.module#VideoPageModule' },
  { path: 'mapas-detalles', loadChildren: './mapas-detalles/mapas-detalles.module#MapasDetallesPageModule' },
  { path: 'landing', loadChildren: './pages/landing/landing.module#LandingPageModule' },
  { path: 'login', loadChildren: './pages/auth/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/auth/register/register.module#RegisterPageModule' },
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule', canActivate: [AuthGuard] },
  { path: 'aventura', loadChildren: './aventura/aventura.module#AventuraPageModule' },
  { path: 'caminatas', loadChildren: './caminatas/caminatas.module#CaminatasPageModule' },
  { path: 'splash', loadChildren: './splash/splash.module#SplashPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'ingreso', loadChildren: './ingreso/ingreso.module#IngresoPageModule' },
  { path: 'crearpost', loadChildren: './crearpost/crearpost.module#CrearpostPageModule' },
  { path: 'actualizar-usuario', loadChildren: './actualizar-usuario/actualizar-usuario.module#ActualizarUsuarioPageModule' },
  { path: 'customer/:email', loadChildren: './customer/customer.module#CustomerPageModule' },
  { path: 'addcustomer/:email', loadChildren: './addcustomer/addcustomer.module#AddcustomerPageModule' },
  { path: 'addcustomer/:id/:name/:desc/:email', loadChildren: './addcustomer/addcustomer.module#AddcustomerPageModule' },
  { path: 'showcustomer/:id/:name/:desc', loadChildren: './showcustomer/showcustomer.module#ShowcustomerPageModule' },
  { path: 'add-admin', loadChildren: './add-admin/add-admin.module#AddAdminPageModule' },
  { path: 'parapente', loadChildren: './parapente/parapente.module#ParapentePageModule' },
  { path: 'rutaachira', loadChildren: './rutaachira/rutaachira.module#RutaachiraPageModule' },
  { path: 'mohan', loadChildren: './mohan/mohan.module#MohanPageModule' },
  { path: 'mula-del-diablo', loadChildren: './mula-del-diablo/mula-del-diablo.module#MulaDelDiabloPageModule' },
  { path: 'madre-monte', loadChildren: './madre-monte/madre-monte.module#MadreMontePageModule' },
  { path: 'pata-sola', loadChildren: './pata-sola/pata-sola.module#PataSolaPageModule' },
  { path: 'candileja', loadChildren: './candileja/candileja.module#CandilejaPageModule' },
  { path: 'tunjo-de-oro', loadChildren: './tunjo-de-oro/tunjo-de-oro.module#TunjoDeOroPageModule' },
  { path: 'hojarasquin', loadChildren: './hojarasquin/hojarasquin.module#HojarasquinPageModule' },
  { path: 'la-llorona', loadChildren: './la-llorona/la-llorona.module#LaLloronaPageModule' },
  { path: 'sombreron', loadChildren: './sombreron/sombreron.module#SombreronPageModule' },
  { path: 'rutacacao', loadChildren: './rutacacao/rutacacao.module#RutacacaoPageModule' },
  { path: 'rutacafe', loadChildren: './rutacafe/rutacafe.module#RutacafePageModule' },
  { path: 'rutabiodiversidad', loadChildren: './rutabiodiversidad/rutabiodiversidad.module#RutabiodiversidadPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
